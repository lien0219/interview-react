import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, StatsGl } from "@react-three/drei";
import * as THREE from "three";
import { GUI } from "lil-gui";
import { setupGLTFLoader } from "@/loaders/setupGLTFLoader";

function FacecapModel({ modelPath = "/models/gltf/facecap.glb" }) {
  const { gl } = useThree();
  const group = useRef<THREE.Group>(null);
  const mixer = useRef<THREE.AnimationMixer | null>(null);
  const [scene, setScene] = useState<THREE.Object3D | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loader = setupGLTFLoader(gl);

    loader.load(
      modelPath,
      (gltf) => {
        setScene(gltf.scene);
        setIsLoading(false);

        if (gltf.animations.length > 0) {
          mixer.current = new THREE.AnimationMixer(gltf.scene);
          mixer.current.clipAction(gltf.animations[0]).play();
        }

        // Morph 控制
        const head = gltf.scene.getObjectByName("mesh_2") as THREE.Mesh;
        if (head && head.morphTargetInfluences && head.morphTargetDictionary) {
          const gui = new GUI();
          gui.close();
          Object.entries(head.morphTargetDictionary).forEach(([key, index]) => {
            gui
              .add(head.morphTargetInfluences!, index as number, 0, 1, 0.01)
              .name(key.replace("blendShape1.", ""))
              .listen();
          });
        }

        const animate = () => {
          mixer.current?.update(0.016);
          requestAnimationFrame(animate);
        };

        animate();
      },
      (xhr) => {
        // 加载进度
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("Error loading GLTF model:", error);
        setIsLoading(false);
      }
    );

    return () => {
      mixer.current?.stopAllAction();
      if (mixer.current) {
        mixer.current = null;
      }
      loader.abort();
    };
  }, [gl, modelPath]);

  if (isLoading || !scene) {
    return <mesh visible={false} />;
  }

  return <primitive ref={group} object={scene} />;
}

export default function FacecapViewer() {
  return (
    <div style={{ width: "100%", height: "400px", background: "#666" }}>
      <Canvas
        camera={{ position: [-1.8, 0.8, 3], fov: 45, near: 1, far: 20 }}
        shadows
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <Environment preset="city" background />
        <FacecapModel />
        <OrbitControls
          enableDamping
          minDistance={2.5}
          maxDistance={5}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 1.8}
          target={[0, 0.15, -0.2]}
        />
        <StatsGl />
      </Canvas>
    </div>
  );
}

import React from "react";
import { useCounterStore } from "../../store";

const About: React.FC = () => {
  const { count, increment, decrement } = useCounterStore();
  return (
    <div className="page-container">
      <h1>about</h1>
      <p>这是about</p>
      <div className="counter-container">
        <h2>共享计数器: {count}</h2>
        <div className="counter-buttons">
          <button onClick={() => increment(5)}>+5</button>
          <button onClick={() => decrement(5)}>-5</button>
        </div>
      </div>
    </div>
  );
};

export default About;

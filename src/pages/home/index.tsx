import React from "react";
import { useCounterStore } from "../../store";
import { Button, Card, Typography } from "antd";

const Home: React.FC = () => {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <div className="page-container">
      <Card title="首页" variant="outlined">
        <Typography.Title level={2}>这是首页</Typography.Title>
      </Card>

      <Card title="计数器" style={{ marginTop: 20 }} variant="outlined">
        <Typography.Text strong>当前计数: {count}</Typography.Text>
        <div style={{ marginTop: 16, display: "flex", gap: 16 }}>
          <Button type="primary" onClick={() => increment()}>
            +1
          </Button>
          <Button onClick={() => decrement()}>+1</Button>
          <Button type="default" danger onClick={() => increment(10)}>
            +10
          </Button>
          <Button type="default" danger onClick={() => decrement(10)}>
            -10
          </Button>
          <Button type="default" onClick={reset}>
            重置
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Home;

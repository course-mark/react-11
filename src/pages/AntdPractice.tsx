import React, { useState } from "react";
import { Button, Input, RadioChangeEvent } from "antd";
import { Radio } from "antd";

const AntdPractice = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Button onClick={()=>{
        setIsLoading(true);
        setTimeout(()=>{
          setIsLoading(false);
        }, 2000);
      }} type="primary" loading={isLoading}>
        Primary Button
      </Button>
      <Input placeholder="Antd Component" />
      <input placeholder="Basic component" />
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default AntdPractice;

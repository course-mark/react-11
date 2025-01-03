import { AppleFilled } from "@ant-design/icons";
import { Button, FloatButton } from "antd";
import React, { useState } from "react";

const AntdButtonsPage = () => {
  // const [isDisabled, setIsDisabled] = useState(true)
  
  return (
    <div>
      <div className="flex flex-wrap">
        <Button>Default Button</Button>
        <AppleFilled style={{
          color: "red",
          fontSize: "50px",
        }}/>
        <Button loading={false} type="primary"> Primary Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="link">Link Button</Button>
        <Button type="text">Text Button</Button>
      </div>
    </div>
  );
};

export default AntdButtonsPage;

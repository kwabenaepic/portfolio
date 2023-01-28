import React from "react";
import LeftNav from "./LeftNav";

const LeftPanel = () => {
  return (
    <div className="flex flex-auto">
      <div className="bg-yellow-500 w-60">
        <div className="bg-red-200 w-full flex h-48"></div>
        <LeftNav />
      </div>
    </div>
  );
};

export default LeftPanel;

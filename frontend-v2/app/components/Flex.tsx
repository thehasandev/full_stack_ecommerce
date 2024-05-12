import React from "react";
export interface flexProps {
  className: string;
  children: any;
}
function Flex({ children, className }: flexProps) {
  return <div className={`flex ${className}`}>{children}</div>;
}

export default Flex;

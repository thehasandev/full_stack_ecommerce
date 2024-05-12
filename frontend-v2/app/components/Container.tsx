import React from "react";

export interface containerProps {
  children: any;
  className?: string;
}

function Container({ children, className }: containerProps) {
  return (
    <div className={`max-w-[1400px] mx-auto ${className}`}>{children}</div>
  );
}

export default Container;

import type { ReactNode } from "react";

export interface FooterProps {
  children?: ReactNode;
}

export default (_: FooterProps) => {
  return (
    <div style={{ backgroundColor: "#01FF70" }}>
      <p>I am the default Footer content</p>
    </div>
  );
};

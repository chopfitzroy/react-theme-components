import { FooterProps } from "../../../components/Footer";

export default ({ children }: FooterProps) => {
  return (
    <div style={{ backgroundColor: "#FF4136" }}>
      <p>I am the red themed Footer content</p>
      {children}
    </div>
  );
};

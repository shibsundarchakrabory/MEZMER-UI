import "./PlainButton.css";

export function PlainButton({ children, ...props }) {
  return <button className="plain-button" {...props}>{children}</button>;
}

export default PlainButton;



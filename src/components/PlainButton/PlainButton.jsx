import "./PlainButton.css";
import "../../styles/tokens.css"
import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent";

export function PlainButton({
  children,
  btntype = "default",
  btntheme = "default",
  ...props
}) {
  let className = `plain-button btn-${btntype} `;

  className += ThemeFunctionConponent(btntheme)

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}



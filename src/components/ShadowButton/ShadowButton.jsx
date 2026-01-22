import "./ShadowButton.css";

import ThemeFunctionConponent from "../../Functions/ThemeFunctionConponent/ThemeFunctionConponent";

export function ShadowButton({
  children,
  btntype = "default",
  btntheme = "default",
  shadowColor = "#ffffff",
  spread = "10px",
  inside = false,
  ...props
}) {
  let className = `plain-button btn-${btntype}  `;
  let ShadowColor = shadowColor;
  let Inside = "";

  className += ThemeFunctionConponent(btntheme);

  

  if (inside === true || inside === "true") {
    Inside = "inset";
  }

  return (
    <button
      style={{ boxShadow: `${Inside} 0px 0px ${spread} ${ShadowColor}` }}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}


function ThemeFunctionConponent(btntheme) {
  if (btntheme === "light") {
    return " btn-light";
  } else if (btntheme === "dark") {
    return "btn-dark";
  }
  return "";
}

export default ThemeFunctionConponent;
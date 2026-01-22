function ThemeFunctionConponent(btntheme) {
  if (btntheme === "light") {
    return " btn-light";
  } else if (btntheme === "dark") {
    return "btn-dark";
  }
}

export default ThemeFunctionConponent;

import React from "react";
import { useThemeContext } from "../contexts/ThemeProvider";

const Header = ({ category, title }) => {
  const { currentColor } = useThemeContext();
  return (
    <div className="mb-10 ">
      <p className="text-gray-400">{category}</p>
      <p
        className="text-3xl font-extrabold tracking-tight "
        style={{ color: currentColor }}
      >
        {title}
      </p>
    </div>
  );
};

export default Header;

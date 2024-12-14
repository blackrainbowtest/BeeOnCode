import { useEffect } from "react";
import { useState } from "react";

const ThemeToggleComponent = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  useEffect(() => {
	const root = window.document.documentElement

	console.log(window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches);

	root.setAttribute("data-theme", theme);
	localStorage.setItem("theme", theme);
  }, [theme])
  const themeToggle = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="flex gap-4 p-4">
      <button className="btn" onClick={() => themeToggle("light")}>
        Светлая
      </button>
      <button className="btn" onClick={() => themeToggle("dark")}>
        Темная
      </button>
      <button className="btn" onClick={() => themeToggle("system")}>
        Системная
      </button>
    </div>
  );
};

export default ThemeToggleComponent;

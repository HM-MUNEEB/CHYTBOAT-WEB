import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function ThemeToggle(props) {
  const [darkTheme, setDarkTheme] = useState(undefined);

  useEffect(() => {
    var check = document.documentElement.getAttribute("data-theme");
    setDarkTheme(check != "light");
    checkForTheme();
  }, []);

  const handleToggle = (event) => {
    setDarkTheme(event);
  };

  useEffect(() => {
    checkForTheme();
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue);
  }, []);

  function checkForTheme() {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.setAttribute("data-theme", "light");
        window.localStorage.setItem("theme", "light");
      }
    }
  }

  return (
    <DarkModeSwitch
      checked={darkTheme}
      onChange={handleToggle}
      size={props.size}
    />
  );
}

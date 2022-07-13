import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

export default function ThemeToggle(props) {
  const { theme, setTheme } = useTheme();
  const [themeCheck, setThemeCheck] = useState(theme == "dark");

  useEffect(() => {
    if (themeCheck) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [themeCheck]);

  function handleThemeIconToggle(event) {
    setThemeCheck(event);
  }

  return (
    <DarkModeSwitch
      checked={themeCheck}
      onChange={handleThemeIconToggle}
      size={48}
    />
  );
}

import { Theme } from "@mui/material";
import { useEffect, useState } from "react";
import { LocalStorage } from "shared/lib";
import { darkTheme, lightTheme } from "../styles/themes";

export const useTheme = (): [Theme | undefined, (theme: "light" | "dark" | undefined) => void] => {
  const [theme, setTheme] = useState<Theme | undefined>();

  useEffect(() => {
    const defaultTheme = getSystemTheme();
    setTheme(defaultTheme);
    return LocalStorage.subscribe("theme", (value) => {
      if (value === "dark") setTheme(darkTheme);
      else if (value === "light") setTheme(lightTheme);
      else setTheme(defaultTheme);
    });
  });

  const onChange = (theme: "light" | "dark" | undefined) => {
    switch (theme) {
      case "light":
        setTheme(lightTheme);
        LocalStorage.setItem("theme", theme);
        break;
      case "dark":
        setTheme(darkTheme);
        LocalStorage.setItem("theme", theme);
        break;
      default:
        const defaultTheme = getSystemTheme();
        setTheme(defaultTheme);
        LocalStorage.removeItem("theme");
    }
  };

  return [theme, onChange];
};

export const getSystemTheme = () => {
  const mediaQuery = "(prefers-color-scheme: dark)";
  const match = window.matchMedia(mediaQuery);
  return match.media !== mediaQuery || match.matches ? darkTheme : lightTheme;
};

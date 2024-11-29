import { useCallback } from "react";
import { assets } from "../assets/assets";

const ThemeButton = () => {
  const toggleTheme = useCallback(() => {
    document.body.classList.toggle("dark");
  }, []);

  return (
    <div
      className="relative flex items-center justify-center border border-foreground rounded-md p-1
       cursor-pointer"
      onClick={toggleTheme}
    >
      <img
        src={assets.moon}
        className="w-6 h-6 transform transition-transform duration-300 ease-in-out scale-100 dark:scale-0"
        alt="Moon Icon"
      />
      <img
        src={assets.sun}
        className="absolute w-6 h-6 transform transition-transform duration-300 ease-in-out scale-0 dark:scale-100"
        alt="Sun Icon"
      />
    </div>
  );
};

export default ThemeButton;

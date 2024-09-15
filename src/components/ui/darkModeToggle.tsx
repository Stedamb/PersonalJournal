
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Switch } from "./switch";

export default function DarkModeToggle
    () {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div>
            <div className="md:hidden flex items-center cursor-pointer space-x-2" onClick={handleDarkModeToggle}>
                {isDarkMode ? (
                    <Sun className="h-6 w-6 text-text" />
                ) : (
                    <Moon className="h-6 w-6 text-text" />
                )}
                <span className="sr-only">Toggle dark mode</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
                <Sun className="h-6 w-6 text-text" />
                <Switch
                    id="dark-mode"
                    onCheckedChange={handleDarkModeToggle}
                />
                <Moon className="h-6 w-6 text-text" />
                <span className="sr-only">Toggle dark mode</span>
            </div>
        </div>
    );
}

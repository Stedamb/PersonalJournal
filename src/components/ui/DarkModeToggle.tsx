import { Switch } from "./switch"; // Assuming your components are here
import { Sun, Moon } from "lucide-react"

export default function DarkModeToggle() {

    const handleDarkModeToggle = (checked: boolean) => {
        if (checked) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <Sun className="h-6 w-6 text-text" />
            <Switch
                id="dark-mode"
                onCheckedChange={handleDarkModeToggle}
            />
            <Moon className="h-6 w-6 text-text" />
            <span className="sr-only">Toggle dark mode</span>
        </div>
    );
}

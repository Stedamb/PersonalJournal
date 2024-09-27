import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Switch } from './switch';
import Cookies from 'js-cookie';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const isDarkModeFromCookie = Cookies.get('darkMode') === 'true';
    if (isDarkModeFromCookie) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark'); // Ensure light mode initially
    }
    // Cleanup function to remove event listener
    return () => {
      // You might need to remove any event listeners added here if necessary
    };
  }, []); // Empty dependency array to run only once
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    Cookies.set('darkMode', String(!isDarkMode), { expires: 365 });
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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
                    checked={isDarkMode}    
                />
                <Moon className="h-6 w-6 text-text" />
                <span className="sr-only">Toggle dark mode</span>
            </div>
        </div>
    );
}

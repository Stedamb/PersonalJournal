import DarkModeToggle from "@/components/ui/darkModeToggle"

const Navbar = () => {
  return (
    <div className="container-xl flex justify-between py-4">
      <h5 className="text-text">
        Stefano's Personal Journal
      </h5>
      <div className="flex items-center space-x-2">
        <DarkModeToggle />
        <span className="sr-only">Toggle dark mode</span>
      </div>
    </div>
  );
};

export default Navbar;

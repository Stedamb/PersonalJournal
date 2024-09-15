import DarkModeToggle from "@/components/ui/darkModeToggle"

const Navbar = () => {
  return (
    <div className="container-xl flex justify-between py-4">
      <a href="/">
        <h5>
          Stefano's Personal Journal
        </h5>
      </a>
      <div className="flex items-center space-x-2">
        <DarkModeToggle />
        <span className="sr-only">Toggle dark mode</span>
      </div>
    </div>
  );
};

export default Navbar;

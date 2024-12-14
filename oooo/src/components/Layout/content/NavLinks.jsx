// eslint-disable-next-line react/prop-types
const NavLinks = ({isMenuOpen}) => {
  // portrait
  if (isMenuOpen) {
    return (
      <div className="px-6 space-y-4">
        <a
          href="#"
          className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg block"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg block"
        >
          About
        </a>
        <a
          href="#"
          className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg block"
        >
          Services
        </a>
        <a
          href="#"
          className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg block"
        >
          Contact
        </a>
      </div>
    );
  }

  // landscape
  return (
    <div className="hidden lg:flex space-x-6">
      <a
        href="#"
        className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
      >
        Home
      </a>
      <a
        href="#"
        className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
      >
        About
      </a>
      <a
        href="#"
        className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
      >
        Services
      </a>
      <a
        href="#"
        className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
      >
        Contact
      </a>
    </div>
  );

};

export default NavLinks;


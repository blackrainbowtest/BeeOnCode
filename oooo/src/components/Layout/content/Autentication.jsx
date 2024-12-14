import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Auth = ({isMenuOpen}) => {
  if (isMenuOpen) {
    return (
      <div className="px-6 space-y-4">
        <Link
          to="/signin"
          className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg block"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg block"
        >
          Sign Up
        </Link>
      </div>
    );
  }
  return (
    <div className="hidden lg:flex space-x-6">
      <Link
        to="/signin"
        className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
      >
        Sign In
      </Link>
      <Link
        to="/signup"
        className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-lg"
      >
        Sign Up
      </Link>
    </div>
  );

};

export default Auth;


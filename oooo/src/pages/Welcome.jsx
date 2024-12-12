import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary">Welcome to My App!</h1>
        <p className="py-6 text-lg text-base-content">
          Explore the features of our app and enjoy the seamless experience.
        </p>
			<Link to={"/getstarted"} className="btn btn-accent">Get Started</Link>
      </div>
    </div>
  );
};

export default Welcome;

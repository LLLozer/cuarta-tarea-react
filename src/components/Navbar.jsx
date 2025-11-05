import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">Logout</Link>
    </nav>
  );
};

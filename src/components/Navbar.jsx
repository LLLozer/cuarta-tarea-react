import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/about">Logout</Link>
      <br />
      <Link to="/login">Login</Link>
    </nav>
  );
};

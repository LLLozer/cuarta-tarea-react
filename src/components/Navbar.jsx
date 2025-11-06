import { Link } from "react-router";
import { Logout } from "./Logout";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <br />
      <Logout />
    </nav>
  );
};

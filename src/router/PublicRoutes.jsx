import { useNavigate, Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export const PublicRoutes = () => {
  const navigate = useNavigate();

  const isLogged = localStorage.getItem("isLogged");

  if (!isLogged) {
    navigate("/home");
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }
};

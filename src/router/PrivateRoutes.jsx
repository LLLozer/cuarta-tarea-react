import { useNavigate, Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export const PrivateRoutes = () => {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("isLogged");
  console.log(isLogged);

  if (isLogged !== true) {
    navigate("/login");
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }
};

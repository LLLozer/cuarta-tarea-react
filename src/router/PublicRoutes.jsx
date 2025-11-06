import { Navigate, Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export const PublicRoutes = () => {
  // const navigate = useNavigate();

  const isLogged = localStorage.getItem("isLogged");

  return !isLogged ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/home" />
  );

  // if (!isLogged) {
  //   navigate("/home");
  //   return (
  //     <>
  //       <Navbar />
  //       <Outlet />
  //     </>
  //   );
  // }
};

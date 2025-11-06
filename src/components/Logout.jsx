import { useNavigate } from "react-router";

export const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    navigate("/login");
  };
  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

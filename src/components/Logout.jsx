import { useNavigate } from "react-router";

export const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    navigate("/login");
  };
  return (
    <>
      <button className="btn btn-outline-danger" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

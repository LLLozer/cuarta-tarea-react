import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();
  const { form, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  const { username, password } = form;

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("isLogged", true);
    navigate("/home");
    console.log(form);
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleChange}
      />
      <br />
      <button>Login</button>
    </form>
  );
};

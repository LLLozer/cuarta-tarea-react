import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router";

export const Register = () => {
  const navigate = useNavigate();
  const { form, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const handleSubmit = () => {
    navigate("/login");
    handleReset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          onChange={handleChange}
        />
        <br />
        <button onClick={() => console.log(form)}>Register</button>
        <br />
      </form>
    </>
  );
};

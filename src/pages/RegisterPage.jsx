import { useForm } from "../hooks/useForm";

export const Register = () => {
  const { form, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const handleSubmit = () => {
    handleReset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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

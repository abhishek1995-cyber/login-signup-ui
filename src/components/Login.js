import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email: email,
          password: password,
        }
      );

      navigate(`/dashboard?name=${response.data.user.name}&email=${response.data.user.email}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={formData.email}
          onInput={handleInput}
          type="text"
          placeholder="your email"
        />
        <input
          value={formData.password}
          name="password"
          onInput={handleInput}
          type="text"
          placeholder="your password"
        />
        <input type="submit" />
      </form>
    </>
  );
}

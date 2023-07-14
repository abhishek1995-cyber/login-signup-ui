import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      navigate("/login");
    } catch (error) {
      // Handle error response
      if (error.response) {
        // The server responded with a status code outside the range of 2xx
        setErr(error.response.data.message);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          onInput={handleInput}
          name="name"
          value={formData.name}
          type="text"
          placeholder="your name"
        />
        <input
          onInput={handleInput}
          name="email"
          value={formData.email}
          type="text"
          placeholder="your email"
        />
        <input
          onInput={handleInput}
          name="password"
          value={formData.password}
          type="text"
          placeholder="your password"
        />
        {err && <p>{err}</p>}
        <input type="submit" />
      </form>
    </>
  );
}

import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </>
  );
}

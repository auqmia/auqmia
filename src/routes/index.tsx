import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Donate from "../pages/Donate";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export default RoutesMain;

import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
export default RoutesMain;

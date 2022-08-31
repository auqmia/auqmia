import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
export default RoutesMain;

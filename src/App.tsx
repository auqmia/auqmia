import "./App.css";
import Global from "./styles/Global";
import AuthProvider from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import RoutesMain from "./routes";

function App() {
  return (
    <AuthProvider>
      <Global />
      <RoutesMain />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;

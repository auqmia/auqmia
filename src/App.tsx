import "./App.css";
import Routes from "./routes";
import Global from "./styles/Global";
import AuthProvider from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <AuthProvider>
      <Global />
      <Routes />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;

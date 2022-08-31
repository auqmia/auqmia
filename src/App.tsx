import "./App.css";
import Routes from "./routes";
import Global from "./styles/Global";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Global />
      <Routes />
    </AuthProvider>
  );
}

export default App;

import Checkout from "./components/Checkout";
import Login from "./components/Login";
import "./App.css";
import { UserProvider } from "./context/UserContext";
export default function App() {
  return (
    <UserProvider>
      <Login />
      <Checkout />
    </UserProvider>
  );
}

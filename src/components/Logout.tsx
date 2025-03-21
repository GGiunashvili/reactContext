import { useContext } from "react";
import { userContext } from "../context/UserContext";
export default function Logout() {
  const { setUser } = useContext(userContext);
  return (
    <div>
      <button onClick={() => setUser("guest")}>Log Out</button>
    </div>
  );
}

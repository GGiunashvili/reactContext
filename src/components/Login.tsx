import { useContext, useState } from "react";
import { userContext } from "../context/UserContext";
export default function Login() {
  const [value, setValue] = useState("");
  const { setUser } = useContext(userContext);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setUser(value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

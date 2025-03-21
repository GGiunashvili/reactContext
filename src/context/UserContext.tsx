import { createContext, useState } from "react";
const userContext = createContext({} as UserContextType);

interface UserContextType {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState("guest");

  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        {children}
      </userContext.Provider>
    </div>
  );
}

export { UserProvider, userContext };

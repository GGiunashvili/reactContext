import React, { createContext, useReducer } from "react";

interface UserContextType {
  user: string;
  dispatch: React.Dispatch<{ type: string; payload?: string }>;
}

const userContext = createContext({} as UserContextType);

function UserProvider({ children }: { children: React.ReactNode }) {
  function userReducer(
    state: string,
    action: { type: string; payload?: string }
  ): string {
    if (action.type === "login") {
      return action.payload || "";
    }

    if (action.type === "logout") {
      return "";
    }

    return state; // Default case to handle unknown actions
  }

  const [user, dispatch] = useReducer(userReducer, "");

  return (
    <userContext.Provider value={{ user, dispatch }}>
      {children}
    </userContext.Provider>
  );
}

export { UserProvider, userContext };

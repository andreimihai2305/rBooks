import React, { useContext } from "react";

const UserContext = React.createContext(false);

export function useUser() {
  return useContext(UserContext);
}
export default function UserProvider({ children, value }) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

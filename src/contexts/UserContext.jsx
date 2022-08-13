import React, { useContext, useState } from "react";

const UserContext = React.createContext(false);

export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider({ children }) {
  const [user, setUser] = useState(false);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}

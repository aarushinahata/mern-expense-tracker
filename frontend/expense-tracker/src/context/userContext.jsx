import React, { createContext, useState, useCallback } from "react"

export const UserContext = createContext();


const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // 🆕

    const updateUser = useCallback((userData) => {
    setUser(userData);
    setLoading(false);
    }, []);

    const clearUser = useCallback(() => {
    setUser(null);
    setLoading(false);
    }, []);

    return(
        <UserContext.Provider
            value={{
                user,
                updateUser,
                clearUser,
                loading
            }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
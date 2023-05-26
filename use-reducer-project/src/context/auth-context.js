import { createContext, useState, useEffect } from "react";

const AuthContect = createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    return (
        <AuthContect.Provider value={{
            isLoggedIn:isLoggedIn,
            onLogout:logoutHandler,
            onLogin: loginHandler
        }}>
            {props.children}
        </AuthContect.Provider>
    );
}

export default AuthContect;
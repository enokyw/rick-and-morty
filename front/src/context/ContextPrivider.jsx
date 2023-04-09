import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const AppContext = createContext();

export const useRickAndMorty = () => useContext(AppContext); // my custom Hook

/***************************************************/
export function AppProvider({children}) {
    const [access, setAccess] = useState(false); // for login access control
    const navigate = useNavigate();

    /***********************************/
    const authenticate = ({username, password}) => {
        const user = {username:"test@gmail.com",password: "@Qw234"};
        if(user.username === username && user.password === password) {
            setAccess(true);
            navigate("/cards");
        }
    }

    /**************************************/
    useEffect(() => {
        !access && navigate('/accounts/login');
    },[access, navigate]);


    return (
        <AppContext.Provider value={{
            authenticate,
        }}>
            {children}
        </AppContext.Provider>
    )
}



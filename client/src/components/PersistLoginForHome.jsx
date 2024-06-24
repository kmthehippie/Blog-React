import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const PersistLogin = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth, persist } = useAuth();
   

    useEffect(() => {
        let isMounted = true;
        
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err);
            } finally {
                isMounted && setIsLoading(false);
            }
        };
        const checkCookieAfterLoad = () => {
            const jwtToken = Cookies.get("jwt"); // Replace "jwt" with the name of your JWT cookie
            if (jwtToken) {
                !auth?.accessToken && verifyRefreshToken();
            } else {
                setIsLoading(false);}}
            
        if (document.readyState === "complete") {
            checkCookieAfterLoad();
        } else {
            window.onload = checkCookieAfterLoad;
        }
       !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false)
        return () => isMounted = false
    }, []);
  
    
    return (<> {children}</>
    );
};

export default PersistLogin;

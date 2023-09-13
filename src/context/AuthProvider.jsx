import { createContext, useEffect, useState} from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(0);
    const [user, setUser] = useState(false);
    const [alert, setAlert] = useState({});
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter(); 
    
    useEffect(() => {
        const authUser = async () => {
            try {
                const token = localStorage.getItem("token");
                if(!token) {
                    setLoading(true)
                    return
                } else {
                    setUser(true);
                    setName(token)
                    setLoading(false);
                }
            } catch (error) {
                console.log(error)
            }
        }

        authUser()
    }, [isAuth]);

    const handleLogOut = () => {
        setUser(false);
        localStorage.setItem('token', '')
        router.push('/');
    }

    return(    
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth,
                alert,
                setAlert,
                handleLogOut,
                user,
                loading,
                name
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;
import { useReducer } from "react"
import { types } from "../types/Types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { useNavigate } from "react-router-dom"


const init = () =>{
    const user = JSON.parse(localStorage.getItem('user'));

    return{
        logged: !!user,
        user: user
    }
}

export const AuthProvider  = ({children}) =>{

    const [authState, dispatch] = useReducer(authReducer, {}, init);
    const navigate = useNavigate();

    const login = (data) =>{
        const user = {id: data.user.uid, name: data.user.name, role: data.user.role, token:data.token}
        const action = {
            type : types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }

    const logout = () =>{
        localStorage.removeItem('user');
        const action = {
            type: types.logout
        };
        dispatch(action);
        navigate('/login');
    }
    

    return(
        <AuthContext.Provider value={{
            ...authState,
            login: login,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
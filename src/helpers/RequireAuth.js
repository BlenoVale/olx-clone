import { Navigate } from "react-router-dom";
import { isLogged } from "./AuthHandler";

export const RequireAuth = ({ children }) => {
    let isAuth = isLogged() ? true : false;

    if (!isAuth) {
        return <Navigate to='/signup' />
    }

    return children;
}
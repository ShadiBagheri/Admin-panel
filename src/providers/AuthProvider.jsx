import { Navigate } from "react-router-dom";
import { getCookie } from "../utils/cookie.js";

const AuthProvider = ({ children }) => {
    const token = getCookie("token");
    if (!token) return <Navigate to="/login" />;

    return children;
}

export default AuthProvider



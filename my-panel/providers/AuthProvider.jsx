import { useRouter } from "next/router";
import { getCookie } from "../utils/cookie.js";

const AuthProvider = ({ children }) => {
    const router = useRouter();

    const token = getCookie("token");
    if (!token) return router.push("/login");

    return children;
}

export default AuthProvider



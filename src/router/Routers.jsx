import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
import Login from "../pages/Login.jsx";
import NotFound from "../pages/NotFound.jsx";
import Register from "../pages/Register.jsx";
import AuthProvider from "../providers/AuthProvider.jsx";
import ProductsPanel from "../pages/ProductsPanel.jsx";

const Routers = () => {
    // const token = getCookie("token");
    // console.log(token);
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <AuthProvider>
                        <ProductsPanel/>
                    </AuthProvider>
                }/>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers


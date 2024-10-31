import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useLogin } from "../services/mutation.js";
import { setCookie } from "../utils/cookie.js";
import logo from "../images/logo.png";

const Login = () => {
    const [form, setForm] = useState({
        userName: "",
        password: "",
    })
    const [error, setError] = useState({
        userName: "",
        password: "",
    })

    const navigate = useNavigate();
    const { mutate } = useLogin();

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setForm((form) => ({...form, [name] : value}));
        setError((error) => ({...error, [name]: ""}))
    }

    const { userName, password } = form;

    const validation = () => {
        let error = {};
        if (!userName.trim()) error.userName = "لطفا نام کاربری را وارد کنید";
        if (!password) error.password = "رمز عبور را وارد کنید";
        return error;
    }

    const loginHandler = (event) => {
        event.preventDefault();

        const validationErrors = validation(form);
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }
        resetForm()

        mutate(form,
            {onSuccess: (data) => {
                    console.log(data.data);
                    setCookie("token", data.data?.token);
                    navigate("/")},
                onError: (error) => console.log(error.response.data.message)})
    };

    const resetForm = () => {
        setForm({ userName: "", password: ""});
        setError({ userName: "", password: ""});
    };

    return(
        <div className="flex flex-col w-[470px] h-[523px] items-center mt-[100px] mx-auto bg-[#ffffff] border-[1px] border-[#e4e4e4] rounded-[40px]">
            <div className="flex flex-col items-center mt-[40px]">
                <img className="w-[80px] h-[80.47px]" src={logo} alt="logo"/>
                <h1 className="mt-4 text-2xl font-medium text-[#282828]">فرم ورود</h1>
            </div>
            <form onSubmit={loginHandler} className="flex flex-col items-center mt-[50px] gap-2.5">
                <div className="h-[70px]">
                    <input className="w-[400px] h-[53px] px-5 bg-[#f2f2f2] rounded-[15px] text-right outline-none" type="text" name="userName" placeholder="نام کاربری" value={form.userName} onChange={changeHandler}/>
                    {error.userName && <p className="mt-1 mb-2 mx-4 text-right text-xs font-bold text-red-600">{error.userName}</p>}
                </div>
                <div className="h-[70px]">
                    <input className="w-[400px] h-[53px] px-5 bg-[#f2f2f2] rounded-[15px] text-right outline-none" type="password" name="password" placeholder="رمز عبور" value={form.password} onChange={changeHandler}/>
                    {error.password && <p className="mt-1 mb-2 mx-4 text-right text-xs font-bold text-red-600">{error.password}</p>}
                </div>
                <button type="submit" className="w-[400px] h-[53px] my-[20px] bg-[#55a3f0] rounded-[15px] text-center text-[#ffff] font-medium">ورود</button>
            </form>
            <Link to="/register" className="me-64 text-base text-[#3a8bed] font-normal">ایجاد حساب کاربری!</Link>
        </div>
    )
}

export default Login

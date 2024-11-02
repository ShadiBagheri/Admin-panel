import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//CustomHooks
import { useRegister } from "../services/mutation.js";
//Image
import logo from "../images/logo.png";


const Register = () => {
    const [form, setForm] = useState({
        userName: "",
        password: "",
        confirmPassword: ""
    })
    const [error, setError] = useState({
        userName: "",
        password: "",
        confirmPassword: ""
    })

    const navigate = useNavigate();
    const { mutate } = useRegister();

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setForm((form) => ({...form, [name] : value}));
        setError((error) => ({...error, [name]: ""}))
    }

    const { userName, password, confirmPassword } = form;

    const validation = () => {
        let error = {};
        if (!userName.trim()) error.userName = "لطفا نام کاربری را وارد کنید";
        if (!password || !confirmPassword) error.password = "لطفا رمز عبور را وارد کنید";
        if (password !== confirmPassword) error.confirmPassword = "رمز عبور یکسان نیست!";
        return error;
    }

    const registerHandler = (event) => {
        event.preventDefault();

        const validationErrors = validation(form);
        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        resetForm()
        console.log(form)

        // navigate("/login");

        mutate(
            { userName, password },
            {
                onSuccess: (data) => {
                    console.log(data);
                    navigate("/login");
                },
                onError: (error) => console.log(error.response.data.message),
            }
        );
    };

    const resetForm = () => {
        setForm({ userName: "", password: "", confirmPassword: "" });
        setError({ userName: "", password: "", confirmPassword: ""});
    };

    return(
        <div className="flex flex-col w-460 h-596 items-center mt-[50px] mx-auto bg-[#ffffff] border-[1px] border-[#e4e4e4] rounded-[40px]">
            <div className="flex flex-col items-center mt-[35px]">
                <img className="w-[80px] h-[80.47px]" src={logo} alt="logo"/>
                <h1 className="mt-4 text-2xl font-medium text-[#282828]">فرم ثبت نام</h1>
            </div>
            <form onSubmit={registerHandler} className="flex flex-col items-center mt-[45px] gap-2.5">
                <div className="h-[70px]">
                    <input className="w-[400px] h-[53px] px-5 bg-[#f2f2f2] rounded-[15px] text-right outline-none" type="text" name="userName" placeholder="نام کاربری" value={form.userName} onChange={changeHandler}/>
                    {error.userName && <p className="mt-1 mb-2 mx-4 text-right text-xs font-bold text-red-600">{error.userName}</p>}
                </div>
                <div className="h-[70px]">
                    <input className="w-[400px] h-[53px] px-5 bg-[#f2f2f2] rounded-[15px] text-right outline-none" type="password" name="password" placeholder="رمز عبور" value={form.password} onChange={changeHandler}/>
                    {error.password && <p className="mt-1 mb-2 mx-4 text-right text-xs font-bold text-red-600">{error.password}</p>}
                </div>
                <div className="h-[70px]">
                    <input className="w-[400px] h-[53px] px-5 bg-[#f2f2f2] rounded-[15px] text-right outline-none" type="password" name="confirmPassword" placeholder="تکرار رمز عبور" value={form.confirmPassword} onChange={changeHandler}/>
                    {error.confirmPassword && <p className="mt-1 mb-2 mx-4 text-right text-xs font-bold text-red-600">{error.confirmPassword}</p>}
                </div>
                <button type="submit" className="w-[400px] h-[53px] my-[22px] bg-[#55a3f0] rounded-[15px] text-center text-[#ffff] font-medium">ثبت نام</button>
            </form>
            <Link to="/login" className="me-64 text-base text-[#3a8bed] font-normal ">حساب کاربری دارید؟</Link>
        </div>
    )
}

export default Register
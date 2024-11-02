import { useState } from "react";
import {useEditProduct} from "../services/mutation.js";

const EditModals = ({ setEditModal }) => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        quantity: ""
    })

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setForm(form => ({...form, [name]: value}));
    }

    const { mutate, data } = useEditProduct();

    const addNewDataHandler = (event) => {
        event.preventDefault();

        const { name, price, quantity } = form;
        if (!name || !price || !quantity) return;

        mutate(
            {
                name,
                price: Number(price),
                quantity: Number(price)
            },
            {onSuccess: (data) => {
                console.log(data)
                    resetForm()
                },
                onError: (error) => {
                console.log(error)
                }
            })
    }

    const resetForm = () => setForm({name: "", price: "", quantity: ""});

    const cancelEditHandler = () => {
        setEditModal(false);
    }

    return(
        <div className="flex flex-col items-center w-[460px] h-[448px] mx-auto my-28 py-5 px-10 bg-[#ffff] rounded-[30px] absolute">
            <h1 className="mt-4 text-[20px] font-medium text-[#282828]">ویرایش اطلاعات</h1>
            <form className="flex flex-col items-end my-5 gap-3">
                <div className="flex flex-col">
                    <label className="text-[14px] font-medium text-[#282828]">نام کالا</label>
                    <input className="w-[389px] h-[42px] mt-3 p-[10px] text-[14px] bg-[#f2f2f2] rounded-[8px] outline-none"
                           type="text"
                           placeholder="نام کالا"
                           name="name"
                           value={form.name}
                           onChange={changeHandler}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-[14px] font-medium text-[#282828]">تعداد موجودی</label>
                    <input className="w-[389px] h-[42px] mt-3 p-[10px] text-[14px] bg-[#f2f2f2] rounded-[8px] outline-none"
                           type="number"
                           placeholder="تعداد"
                           name="price"
                           value={form.price}
                           onChange={changeHandler}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-[14px] font-medium text-[#282828]">قیمت</label>
                    <input className="w-[389px] h-[42px] mt-3 p-[10px] text-[14px] bg-[#f2f2f2] rounded-[8px] outline-none"
                           type="number"
                           placeholder="قیمت"
                           name="quantity"
                           value={form.quantity}
                           onChange={changeHandler}
                    />
                </div>
                <div className="flex mx-auto justify-between mt-5">
                    <button onClick={addNewDataHandler} className="w-[185px] h-[42px] ml-2 p-[10px] text-[14px] font-medium text-[#fff] bg-[#55a3f0] rounded-[10px]">ثبت اطلاعات جدید</button>
                    <button onClick={cancelEditHandler} className="w-[185px] h-[42px] mr-2 p-[10px] text-[14px] font-medium text-[#282828] bg-[#dfdfdf] rounded-[10px]">انصراف</button>
                </div>
            </form>
        </div>
    )
}

export default EditModals
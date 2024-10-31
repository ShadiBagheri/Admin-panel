import { useState } from "react";
import { useProducts } from "../services/mutation.js";
import Alert from '@mui/material/Alert';
import { CiCircleCheck } from "react-icons/ci";
import ProductsCard from "./ProductsCard.jsx";


const AddModal = ({ showModal, setShowModal }) => {
    const [form, setForm] = useState({
        "name": "",
        "price": 0,
        "quantity": 0
    })

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setForm(form => ({...form, [name]: value}));
    }

    const { mutate, isPending, error, data } = useProducts();

    const addModalHandler = (event) => {
        event.preventDefault();
        const { name, price, quantity } = form;
        console.log(form)

        resetForm()

        if (!name || !price || !quantity) return;

        mutate(form,
            {
                onSuccess: (data) => {
                    console.log(data)
                },
                onError: (error) => console.log(error)
        })
    }

    const closeHandler = () => {
        resetForm()
    }

    const resetForm = () => {
        setForm({ name: "", price: "", quantity: ""});
    };

    return(
        <div className="w-full h-full mt-[-970px] py-96 backdrop-blur-sm bg-black/30 z-10">
            <div className="mt-[-250px] mx-auto">
                {data?.status === 201 &&
                    <Alert className="w-[200px] h-[70px] mt-[50px] mx-auto p-2 text-center"
                           icon={<CiCircleCheck className="mx-2"/>} severity="success">
                        محصول جدید اضافه شد
                    </Alert>}
                <div className="flex flex-col items-center w-[460px] h-[448px] mx-auto my-5 py-5 px-10 bg-[#ffff] rounded-[30px]">
                    <h1 className="mt-2 text-[20px] font-medium text-[#282828]">ایجاد محصول جدید</h1>
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
                            <button onClick={addModalHandler} className="w-[185px] h-[42px] ml-2 p-[10px] text-[14px] font-medium text-[#fff] bg-[#55a3f0] rounded-[10px]">
                                ایجاد
                            </button>
                            <button onClick={closeHandler} className="w-[185px] h-[42px] mr-2 p-[10px] text-[14px] font-medium text-[#282828] bg-[#dfdfdf] rounded-[10px]">
                                انصراف
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddModal


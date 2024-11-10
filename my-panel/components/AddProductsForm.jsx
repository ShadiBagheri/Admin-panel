import { useState } from "react";
import { useCreateProducts } from "../services/mutation.js";
// import Alert from "@mui/material/Alert";
// import { CiCircleCheck } from "react-icons/ci";

const AddProductsForm = ({ setShowModal }) => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        quantity: ""
    })

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setForm(form => ({...form, [name]: value}));
    }

    const { mutate, data } = useCreateProducts();

    const addHandler = (event) => {
        event.preventDefault()

        const { name, price, quantity } = form;
        if (!name || !price || !quantity) return;

        mutate({
            name,
            price: Number(price),
            quantity: Number(quantity)
        }, {
            onSuccess: (data) => {
                console.log(data)
                resetForm()
            },
            onError: (error) => {
                console.log(error)
            }
        })
    }

    const resetForm = () => setForm({name: "", price: "", quantity: ""});

    const cancelHandler = () => {
        setShowModal(false)
    }

    return(
        <div className="container flex items-center w-[100%] h-[100%] backdrop-blur-sm bg-black/30 z-10 absolute overflow-hidden">
            <div className="w-[460px] h-[448px] items-center mx-auto mt-[-350px] p-10 bg-[#ffff] rounded-[30px] overflow-hidden">
                {/*{data?.status === 201 &&*/}
                {/*    <Alert className="w-[200px] h-[70px] mt-[50px] mx-auto p-2 text-center"*/}
                {/*           icon={<CiCircleCheck className="mx-2"/>} severity="success">*/}
                {/*        محصول جدید اضافه شد*/}
                {/*    </Alert>}*/}
                <h1 className="mt-2 text-[20px] text-center font-medium text-[#282828]">ایجاد محصول جدید</h1>
                <form onSubmit={addHandler} className="flex flex-col items-end my-5 mx-auto gap-3">
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
                               name="quantity"
                               value={form.quantity}
                               onChange={changeHandler}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[14px] font-medium text-[#282828]">قیمت</label>
                        <input className="w-[389px] h-[42px] mt-3 p-[10px] text-[14px] bg-[#f2f2f2] rounded-[8px] outline-none"
                               type="number"
                               placeholder="قیمت"
                               name="price"
                               value={form.price}
                               onChange={changeHandler}
                        />
                    </div>
                    <div className="flex mx-auto justify-between mt-5">
                        <button type="submit" className="w-[185px] h-[42px] ml-2 p-[10px] text-[14px] font-medium text-[#fff] bg-[#55a3f0] rounded-[10px]">
                            ایجاد
                        </button>
                        <button onClick={cancelHandler} className="w-[185px] h-[42px] mr-2 p-[10px] text-[14px] font-medium text-[#282828] bg-[#dfdfdf] rounded-[10px]">
                            انصراف
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProductsForm
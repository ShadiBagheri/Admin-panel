import { useEffect, useState } from "react";
//Services
import { useEditProduct } from "../services/mutation.js";

const EditModals = ({ setEditModal, product }) => {
    const [form, setForm] = useState({
        name: "",
        price: "",
        quantity: ""
    });

    const { mutate } = useEditProduct();

    useEffect(() => {
        if (product) {
            setForm({
                name: product.name,
                price: product.price,
                quantity: product.quantity
            });
        }
    }, [product]);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const addNewDataHandler = (event) => {
        event.preventDefault();

        const { name, price, quantity } = form;
        if (!name || !price || !quantity) return;

        mutate(
            {
                id: product.id,
                name,
                price: Number(price),
                quantity: Number(quantity)
            },
            {
                onSuccess: () => {
                    setEditModal(false);
                },
                onError: (error) => {
                    console.error(error);
                }
            }
        );
    };

    const cancelEditHandler = () => {
        setEditModal(false);
    };

    return (
        <div className="items-center w-[100%] h-[100%] mt-[0] mr-[-255px] backdrop-blur-sm bg-black/30 z-10 absolute">
            <div className="flex flex-col items-center w-[460px] h-[448px] my-[380px] mx-auto py-5 px-10 bg-[#ffff] rounded-[30px]">
                <h1 className="mt-4 text-[20px] font-medium text-[#282828]">ویرایش اطلاعات</h1>
                <form onSubmit={addNewDataHandler} className="flex flex-col items-end my-5 gap-3">
                    <div className="flex flex-col">
                        <label className="text-[14px] font-medium text-[#282828]">نام کالا</label>
                        <input
                            className="w-[389px] h-[42px] mt-3 p-[10px] text-[14px] bg-[#f2f2f2] rounded-[8px] outline-none"
                            type="text"
                            placeholder="نام کالا"
                            name="name"
                            value={form.name}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[14px] font-medium text-[#282828]">تعداد موجودی</label>
                        <input
                            className="w-[389px] h-[42px] mt-3 p-[10px] text-[14px] bg-[#f2f2f2] rounded-[8px] outline-none"
                            type="number"
                            placeholder="تعداد"
                            name="quantity"
                            value={form.quantity}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-[14px] font-medium text-[#282828]">قیمت</label>
                        <input
                            className="w-[389px] h-[42px] mt-3 p-[10px] text-[14px] bg-[#f2f2f2] rounded-[8px] outline-none"
                            type="number"
                            placeholder="قیمت"
                            name="price"
                            value={form.price}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="flex mx-auto justify-between mt-5">
                        <button type="submit" className="w-[185px] h-[42px] ml-2 p-[10px] text-[14px] font-medium text-[#fff] bg-[#55a3f0] rounded-[10px]">ثبت اطلاعات جدید</button>
                        <button type="button" onClick={cancelEditHandler} className="w-[185px] h-[42px] mr-2 p-[10px] text-[14px] font-medium text-[#282828] bg-[#dfdfdf] rounded-[10px]">انصراف</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModals;

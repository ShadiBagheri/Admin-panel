// import { useState } from "react";

const EditModals = () => {

    // const [add, setAdd] = useState({
    //     "name": "string",
    //     "price": 0,
    //     "quantity": 0
    // })

    return(
        <div className="flex flex-col items-center w-[460px] h-[448px] mx-auto my-28 py-5 px-10 bg-[#ffff] rounded-[30px]">
            <h1 className="mt-4 text-[20px] font-medium text-[#282828]">ویرایش اطلاعات</h1>
            <form className="flex flex-col items-end my-5 gap-3">
                <div className="flex flex-col">
                    <label for="productName" className="text-[14px] font-medium text-[#282828]">نام کالا</label>
                    <input className="w-[389px] h-[42px] mt-3 p-[10px] text-[14px] bg-[#f2f2f2] rounded-[8px] outline-none" id="productName" type="text" placeholder="نام کالا" name="name"/>
                </div>
                <div className="flex flex-col">
                    <label for="num" className="text-[14px] font-medium text-[#282828]">تعداد موجودی</label>
                    <input className="w-[389px] h-[42px] mt-3 p-[10px] text-[14px] bg-[#f2f2f2] rounded-[8px] outline-none" id="num" type="number" placeholder="تعداد" name="price"/>
                </div>
                <div className="flex flex-col">
                    <label for="pri" className="text-[14px] font-medium text-[#282828]">قیمت</label>
                    <input className="w-[389px] h-[42px] mt-3 p-[10px] text-[14px] bg-[#f2f2f2] rounded-[8px] outline-none" id="pri" type="number" placeholder="قیمت" name="quantity"/>
                </div>
                <div className="flex mx-auto justify-between mt-5">
                    <button className="w-[185px] h-[42px] ml-2 p-[10px] text-[14px] font-medium text-[#fff] bg-[#55a3f0] rounded-[10px]">ثبت اطلاعات جدید</button>
                    <button className="w-[185px] h-[42px] mr-2 p-[10px] text-[14px] font-medium text-[#282828] bg-[#dfdfdf] rounded-[10px]">انصراف</button>
                </div>
            </form>
        </div>
    )
}

export default EditModals
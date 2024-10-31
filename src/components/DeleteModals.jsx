//Images
import close from "../images/Close.png";
import {useDeleteProduct} from "../services/mutation.js";

const DeleteModals = () => {

    const { mutate } = useDeleteProduct();

    const deleteHandler = (id) => {
        const data = {
            ids: [id],
        };

        console.log(data);

        mutate(
            { data },
            {
                onSuccess: (data) => {
                    console.log(data);
                },
                onError: (error) => {
                    console.log(error);
                },
            }
        );
    };

    return(
        <div className="flex flex-col items-center w-[472px] h-[338px] mx-auto my-28 py-5 px-10 bg-[#ffff] rounded-[30px]">
            <div className="flex flex-col items-center mt-5">
                <img className="w-[96px] h-[97.83px]" src={close} alt="close"/>
                <h1 className="mt-16 text-[20px] font-normal text-[#282828]">آیا از حذف این محصول مطمئنید؟</h1>
            </div>
            <div className="flex mx-auto justify-between mt-8">
                <button onClick={deleteHandler} className="w-[160px] h-[41px] ml-2 p-[10px] text-[#fff] text-center text-[16px] font-semibold bg-[#f43f5f] rounded-[10px]">حذف</button>
                <button className="w-[160px] h-[41px] mr-2 p-[10px] text-[#282828] text-center text-[16px] font-semibold bg-[#dfdfdf] rounded-[10px]">لغو</button>
            </div>
        </div>
    )
}

export default DeleteModals
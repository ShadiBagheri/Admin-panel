import { useDeleteProduct } from "../services/mutation.js";
//Images
import close from "../images/Close.png";


const DeleteModals = ({ setDeleteModal, productId }) => {
    const { mutate } = useDeleteProduct();

    const deleteHandler = () => {
        if (productId){
            mutate(productId  , {
                onSuccess: (data) => {
                    console.log(data)
                    setDeleteModal(false)
                },
                onError: (error) => {
                    console.log(error)
                }
            })
        }
    }

    const deleteCancelHandler = () => {
        setDeleteModal(false);
    }

    return(
        <div className="container items-center w-[100%] h-[100%] mt-[480px] mr-[-255px] backdrop-blur-sm bg-black/30 z-10 absolute">
            <div className="w-[460px] h-[448px] items-center mx-auto mt-[140px] p-10 bg-[#ffff] rounded-[30px]">
                <div className="flex flex-col items-center mt-5">
                    <img className="w-[96px] h-[97.83px]" src={close} alt="close"/>
                    <h1 className="mt-16 text-[20px] font-normal text-[#282828]">آیا از حذف این محصول مطمئنید؟</h1>
                </div>
                <div className="flex mx-auto justify-between mt-16">
                    <button onClick={deleteHandler} className="w-[160px] h-[41px] ml-2 p-[10px] text-[#fff] text-center text-[16px] font-semibold bg-[#f43f5f] rounded-[10px]">حذف</button>
                    <button onClick={deleteCancelHandler} className="w-[160px] h-[41px] mr-2 p-[10px] text-[#282828] text-center text-[16px] font-semibold bg-[#dfdfdf] rounded-[10px]">لغو</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModals
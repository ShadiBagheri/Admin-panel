//Icons
import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import {useState} from "react";
import DeleteModals from "./DeleteModals.jsx";
import EditModals from "./EditModals.jsx";

const ProductsCard = ({ product }) => {
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    const deleteModalHandler = () => {
        setDeleteModal(true);
    }

    const editModalHandler = () => {
        setEditModal(true);
    }

    return(
        <div className="flex items-center justify-between w-[1140px] h-[70px] mx-auto px-16  border-solid border-[1px] border-[#e4e4e4]">
            <div className="w-[800px] flex items-center justify-between">
                <p className="ml-20 text-[13px] font-normal text-[#282828]">{product?.name}</p>
                <p className="ml-20 text-[13px] font-normal text-[#282828]">{product?.quantity}</p>
                <p className="w-[150px text-[13px] font-normal text-[#282828]">{product?.price}<span className="mx-2 text-[10px] font-normal text-[#282828]">هزار تومان</span></p>
                <p className="w-[150px] text-[13px] font-normal text-[#282828]">{product?.id}</p>
            </div>
            <div className="flex items-center w-[60px] mr-20">
                {/*<button onClick={() => deleteHandler(product?.id)}>*/}
                {/*    <FiEdit className="size-[20px] text-[#4ade80]"/>*/}
                {/*</button>*/}
                <button onClick={editModalHandler}>
                    <FiEdit className="size-[20px] text-[#4ade80]"/>
                </button>
                <button onClick={deleteModalHandler}>
                    <GoTrash className="mx-5 size-[20px] text-[#f43f5e]"/>
                </button>
            </div>
            {!!deleteModal && <DeleteModals setDeleteModal={setDeleteModal}/>}
            {!!editModal && <EditModals setEditModal={setEditModal}/>}
        </div>
    )
}

export default ProductsCard
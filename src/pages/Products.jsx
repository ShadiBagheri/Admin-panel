import { useState } from "react";
//Components
import AddModal from "../components/AddModal.jsx";
//Images
import profile from "../images/profile.jpg";
import setting from "../images/setting-3.png";
//Icons
import { CiSearch } from "react-icons/ci";
import ProductsCard from "../components/ProductsCard.jsx";

const Products = () => {
    const [showModal, setShowModal] = useState(false);
    const addModalHandler = () => {
        setShowModal(true)
    }

    return(
        <div className="flex flex-col">



            <div>
                {!!showModal && <AddModal />}
            </div>
        </div>
    )
}

export default Products


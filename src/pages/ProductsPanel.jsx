import { useState } from "react";
import { useAllProducts } from "../services/queries.js";

import AddProductsForm from "../components/AddProductsForm.jsx";
import ProductsCard from "../components/ProductsCard.jsx";
import {CiSearch} from "react-icons/ci";
import profile from "../images/profile.jpg";
import setting from "../images/setting-3.png";

const ProductsPanel = () => {
    const [page, setPage] = useState(1);
    const { data, error, isPending } = useAllProducts(page);
    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState("");

    if (isPending) return <p>Loading...</p>;

    if (error) {
        console.log(error)
        return <p>Somethings went wrong</p>
    }

    const addModalHandler = () => {
        setShowModal(true);
    }

    //this line have problems

    const filterProducts = data.filter(product => {
        product.name.toLowerCase().includes(search.toLowerCase());
        product.price.toLowerCase().includes(search.toLowerCase());
        product.quantity.toLowerCase().includes(search.toLowerCase());
    })

    return(
        <div className="flex flex-col relative">
            <header className="flex items-center justify-between w-[1140px] h-[68px] mt-[28px] mx-auto px-5 bg-[#ffffff] border-[1px] border-[#e4e4e4] rounded-[16px]">
                <div className="flex mx-2">
                    <CiSearch className="w-[24px] h-[24px]" />
                    <input className="w-[113px] h-[25px] px-2 text-[16px] font-normal text-right outline-none"
                           type="text"
                           placeholder="جستجو کالا"
                           value={search}
                           onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex w-[150px] h-[52px] mx-2 pr-2 border-s-[2px]">
                    <img className="w-[50px] h-[50px] rounded-full" src={profile} alt="profile"/>
                    <div className="flex flex-col items-start mr-2">
                        <h3 className="text-[16px] font-normal text-[#282828]">میلاد عظمی</h3>
                        <span className="text-[14px] font-light text-[#282828]">مدیر</span>
                    </div>
                </div>
            </header>
            {/*Add Products*/}
            <div className="flex w-[1140px] justify-between mx-auto mt-[50px]">
                <div className="flex items-right">
                    <img className="w-[30px] h-[30px] mt-2" src={setting} alt="setting"/>
                    <h2 className="mr-2 text-center text-[24px] font-normal text-[#282828]">مدیریت کالا</h2>
                </div>
                <button onClick={addModalHandler}
                        className="w-[132px] h-[45px] p-[10px] bg-[#55a3f0] text-center text-[16px] font-normal text-[#ffff] rounded-[10px]">
                    افزودن محصول
                </button>
            </div>
            {/*Products list*/}
            <div className="w-[1140px] h-[737px] items-center rounded-[30px] my-5 mx-auto">
                <nav className="w-[1140px] h-[70px] items-center bg-[#f2f2f2] rounded-t-[30px]">
                    <ul className="flex mx-10 p-5">
                        <li className="me-20 text-[14px] font-medium text-[#282828]">نام کالا</li>
                        <li className="mx-24 text-[14px] font-medium text-[#282828]">موجودی</li>
                        <li className="mx-24 text-[14px] font-medium text-[#282828]">قیمت</li>
                        <li className="mx-24 text-[14px] font-medium text-[#282828]">شناسه کالا</li>
                    </ul>
                </nav>
            </div>
            <ul className="w-[1140px] h-[737px] mx-auto mt-[-687px] bg-[#ffff] rounded-b-[30px]">
                {data?.data?.map(product => (
                    <ProductsCard key={product.id} product={product} productsFilter={filterProducts} setSearch={setSearch}/>
                ))}
            </ul>
            <button onClick={() => setPage(2)} className="mx-auto">2</button>
            {!!showModal && <AddProductsForm setShowModal={setShowModal}/>}
        </div>
    )
}

export default ProductsPanel

import React from 'react'
import HomePage_FirstSection from './HomeComponents/FirstSection_Components/HomePage_FirstSection';
import PriceCard from './HomeComponents/PriceCard_Components/PriceCard';
import ProductList from './HomeComponents/ProductList_Component/ProductList';
import { useNavigate } from 'react-router-dom';
import HomePageNavbar from '../../Home_PageComponents/HomePageNavbar';


function Home() {

    const navigate = useNavigate();


    return (
        <div className="w-full py-5 lg:px-10 md:px-10 px-4 font-semibold cursor-pointer flex flex-col gap-5 ">
            {/* Navbar */}
            <HomePageNavbar />
           

            {/* Main Section  */}
            <div className="w-full lg:h-[80vh] md:h-[60vh] h-[60vh]">
                <HomePage_FirstSection />
            </div>

            {/* Price Card */}
            <div className="w-full lg:h-[70vh] md:h-[fit] h-[fit]">
                <PriceCard />
            </div>

            {/* Product List in columns */}
            <div className="w-full lg:h-[80vh] md:h-[60vh] h-[60vh]">
                <ProductList />
            </div>

            {/* Student Review  */}


            {/* Our Teachers Section  */}



        </div>
    )
}

export default Home;
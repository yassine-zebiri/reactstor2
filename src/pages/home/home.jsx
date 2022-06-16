import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Feature from "./components/feature-block/feature";
import MainSlider from "./components/main-salider/mainSlider";
import SaliderDaily from "./components/salider-daily/saliderDaily";
import SaliderProducits from "./components/salider-producits/salider";
import "./index.css";

export function Home(){
return(
    <>      
    <Header/>

    <div className="Home">
        <div>
            <MainSlider/>
        </div>
        <div className="mt-5">
            <Feature/>
        </div>
        <div className="mt-5">
            <SaliderProducits/>
        </div>
        <div className="mt-5">
            <SaliderDaily/>
        </div>
    </div>
    <Footer/>
    </>
)
}
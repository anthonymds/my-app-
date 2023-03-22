import React from "react";

import Header from "../components/Header";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";
import Produtos from "../components/Produtos"



const Home = () => {
    return(
        <>
            <Header/>
            <Slogan/>
            <Produtos/>
            <Footer/>
        </>
    )
}

export default Home
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer";
import Nav from "../../Nav";
import Banner from "../../Banner";
import Header from "../../Header";
import About from "../../About";
import Services from "../../Services";
import Work from "../../Work";
import Contact from "../../Contact";



const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Services />
            <Work />
            <Contact />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
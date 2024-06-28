import Navbar from "../../componets/Navbar";
import Hero from "../../componets/Hero";
import About from "../../componets/About";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "../../componets/Footer";
import {Profile} from "../../componets/Profile";

import React from "react";

export const InitialScreen = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Testimonials/>
            <Footer/>
            <Profile/>
           
        </div>
    )
}
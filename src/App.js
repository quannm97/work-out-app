import React from "react";
import Home from "./components/Home";
import "./dist/styles.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import TestimonialPage from "./Pages/Testimonials";
import Equipments from "./Pages/Equipments";
import Team from "./Pages/Team";
import PlansForm from "./components/Form/PlansForm";

const App = () => {
    return (
        <>
            {/* <Header /> */}
            <Routes>
                <Route index path="/" element={<Home></Home>}/>
                <Route index path="about" element={<About></About>}/>
                <Route index path="contact" element={<Contact></Contact>}/>
                <Route index path="testimonials" element={<TestimonialPage/>}/>
                <Route index path="equipments" element={<Equipments/>}/>
                <Route index path="team" element={<Team/>}/>
                <Route index path="form" element={<PlansForm/>}/>
            </Routes>
        </>
    );
};

export default App;

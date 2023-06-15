import React from "react";
import BgShape from "../images/hero/hero-bg-3.png";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <section className="hero-section">
                <div className="container">
                    <img className="bg-shape" src={BgShape} alt="bg-shape" />
                    <div className="hero-content">
                        <div className="hero-content__text">
                            <h4>Plan your exercise now</h4>
                            <h1>
                                Unleash Your <span>Inner</span> Strength
                            </h1>
                            <p>
                                Our mission is to make every shed kilogram,
                                every run mile, and every squat count. We will
                                help you on your journey to the top.
                            </p>
                            <div className="hero-content__text__btns">
                                <Link
                                    className="hero-content__text__btns__plans"
                                    to="/"
                                >
                                    Workout Plans &nbsp; <i className="fa-solid fa-circle-check"></i>
                                </Link>
                                <Link
                                    className="hero-content__text__btns__learn-more"
                                    to="/"
                                >
                                    Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;

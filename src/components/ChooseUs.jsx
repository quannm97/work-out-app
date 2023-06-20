import React from "react";
import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/running.png";
import Box2 from "../images/chooseUs/finance.png";
import Box3 from "../images/chooseUs/certificate.png";

const ChooseUs = () => {
    return (
        <>
            <section className="choose-section">
                <div className="container">
                    <div className="choose-container">
                        <img
                            className="choose-container__img"
                            src={MainImg}
                            alt="car_img"
                        />
                        <div className="text-container">
                            <div className="text-container__left">
                                <h4>Why Choose Us</h4>
                                <h2>
                                    Discover the best-valued deals you'll ever
                                    find.
                                </h2>
                                <p>
                                    We pride ourselves on offering exceptional
                                    value for your money. Our commitment is to
                                    provide top-notch service, quality products,
                                    and unbeatable prices. Don't miss out on the
                                    opportunity to experience excellence in
                                    every aspect. Join us and let us exceed your
                                    expectations.
                                </p>
                                <a href="#home">
                                    Find Details &nbsp;
                                    <i className="fa-solid fa-angle-right"></i>
                                </a>
                            </div>
                            <div className="text-container__right">
                                <div className="text-container__right__box">
                                    <img src={Box1} alt="running-img" />
                                    <div className="text-container__right__box__text">
                                        <h4>Cross Country Run</h4>
                                        <p>
                                            Embrace the thrill of the run, and
                                            let the sweat be a testament to your
                                            hard work and dedication.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-container__right__box">
                                    {" "}
                                    <img src={Box2} alt="health-img" />
                                    <div className="text-container__right__box__text">
                                        <h4>All-Inclusive Fitness Package</h4>
                                        <p>
                                            Unleash your potential with tailored
                                            workouts that push boundaries,
                                            ignite joy, and deliver
                                            transformative results. Embrace the
                                            journey. Achieve greatness.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-container__right__box">
                                    {" "}
                                    <img src={Box3} alt="certificate-img" />
                                    <div className="text-container__right__box__text">
                                        <h4>No Hidden Charges</h4>
                                        <p>
                                            Experience transparent pricing with
                                            no surprises. Our commitment is to
                                            provide exceptional value without
                                            any hidden fees. Embrace worry-free
                                            fitness and focus on achieving your
                                            goals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ChooseUs;

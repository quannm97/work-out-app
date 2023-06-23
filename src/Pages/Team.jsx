import React from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import TRAINER_DATA from "../components/TrainerData";

const Team = () => {
    return (
        <>
            <section className="team-page">
                <HeroPages name="Our Team" />
                <div className="cotnainer">
                    <div className="team-container">
                        {TRAINER_DATA.map((trainer, id) => (
                            <div key={id} className="team-container__box">
                                <div className="team-container__box__img-div">
                                    <img src={trainer.img} alt="team_img" />
                                </div>
                                <div className="team-container__box__descr">
                                    <h3>{trainer.name}</h3>
                                    <p>{trainer.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="trainer-banner">
                    <div className="trainer-banner__overlay"></div>
                    <div className="container">
                        <div className="text-content">
                            <h2>Book a trainer by getting in touch with us</h2>
                            <span>
                                <i className="fa-solid fa-phone"></i>
                                <h3>(84) 123-456</h3>
                            </span>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default Team;

import React from "react";
import HeroPages from "../components/HeroPages";
import TrainerDetail from "../components/TrainerDetail";
import TRAINER_DATA from "../components/TrainerData";

const Equipments = () => {
    function trainerList() {
        return TRAINER_DATA.map((trainer, index) => {
            return <TrainerDetail data={trainer} key={index} />;
        });
    }
    return (
        <>
            <section className="equipment-section">
                <HeroPages name="Equipments" />
                <div className="container">
                    <div className="models-div">{trainerList()}</div>
                    <div className="trainer-banner">
                        <div className="trainer-banner__overlay"></div>
                        <div className="container">
                            <div className="text-content">
                                <h2>
                                    Book a trainer by getting in touch with us
                                </h2>
                                <span>
                                    <i className="fa-solid fa-phone"></i>
                                    <h3>(84) 123-456</h3>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Equipments;

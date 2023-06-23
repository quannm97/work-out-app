import React, { useState } from "react";
import TrainerBox from "./TrainerBox";
import TRAINER_DATA from "./TrainerData";

const PickTrainer = () => {
    const [coloredBtn, setColoredBtn] = useState("btn0");
    const [active, setActive] = useState("btn0");

    function passName(name) {
        return name
    }

    function coloringButton(id) {
        return coloredBtn === id ? "colored-button" : "";
    }

    function handleOnClick(id) {
        setColoredBtn(id);
        setActive(id);
    }

    function showDetail() {
        return TRAINER_DATA.map((trainer, index) => {
            // console.log(trainer, index);
            return (
                active === `btn${index}` && (
                    <TrainerBox key={trainer.id} data={trainer} id={index} passName={passName}/>
                )
            );
        });
    }
    return (
        <>
            <section className="pick-section">
                <div className="container">
                    <div className="pick-container">
                        <div className="pick-container__title">
                            <h3>Trainer</h3>
                            <h2>Our Professional</h2>
                            <p>Choose among our pro-trainer for your jorney</p>
                        </div>
                        <div className="pick-container__trainer-content">
                            <div className="pick-box">
                                <button
                                    className={`buttton ${coloringButton("btn0")}`}
                                    onClick={() => handleOnClick("btn0")}
                                >
                                    Indiana John
                                </button>
                                <button
                                    className={`buttton ${coloringButton("btn1")}`}
                                    onClick={() => handleOnClick("btn1")}
                                >
                                    John Wick
                                </button>
                                <button
                                    className={`buttton ${coloringButton("btn2")}`}
                                    onClick={() => handleOnClick("btn2")}
                                >
                                    Arnold
                                </button>
                                <button
                                    className={`buttton ${coloringButton("btn3")}`}
                                    onClick={() => handleOnClick("btn3")}
                                >
                                    Reynolds
                                </button>
                                <button
                                    className={`buttton ${coloringButton("btn4")}`}
                                    onClick={() => handleOnClick("btn4")}
                                >
                                    Clerk
                                </button>
                            </div>
                            {showDetail()}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PickTrainer;

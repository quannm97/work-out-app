import React, { useEffect, useState } from "react";
import PlansForm from "./Form/PlansForm";

const Plans = () => {
    const [show, setShow] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        setShow(!show);
    }
    function handleShow() {
        return setShow(!show);
    }

    useEffect(() => {
        document.body.style.overflow = show ? "hidden" : "auto";
    }, [show]);

    return (
        <>
            <section className="plans-section" id="plans-section">
                <div className="container">
                    <div className="plans-content">
                        <div className="plans-content__box">
                            <h3>Plan your schedule</h3>
                            <form className="box-form">
                                <div className="container">
                                    <div className="row gap-2 justify-content-center box-container">
                                        <div className="box-form__workout-type col">
                                            <label>
                                                <i className="fa-solid fa-dumbbell"></i>
                                                &nbsp; Select your plan
                                            </label>
                                            <select>
                                                <option>Cardio</option>
                                                <option>Gymnastic</option>
                                                <option>Street Workout</option>
                                                <option>Big Leg</option>
                                                <option>Running</option>
                                            </select>
                                        </div>

                                        <div className="box-form__workout-type col">
                                            <label>
                                                <i className="fa-solid fa-user"></i>
                                                &nbsp; Select your trainer
                                            </label>
                                            <select>
                                                <option>Indiana John</option>
                                                <option>John Wick</option>
                                                <option>Clerck</option>
                                                <option>Bruce</option>
                                                <option>Reynoy</option>
                                            </select>
                                        </div>

                                        <div className="box-form__workout-type col">
                                            <label>
                                                <i className="fa-solid fa-location-dot"></i>
                                                &nbsp; Where you live
                                            </label>
                                            <select>
                                                <option>Ha Noi</option>
                                                <option>Ho Chi Minh</option>
                                                <option>Hai Phong</option>
                                                <option>Moon</option>
                                                <option>Mar</option>
                                            </select>
                                        </div>

                                        <div className="box-form__workout-time col">
                                            <label>
                                                <i className="fa-solid fa-calendar-days"></i>
                                                &nbsp; Your Schedule
                                            </label>
                                            <input type="date" />
                                        </div>

                                        <button
                                            onClick={handleSubmit}
                                            type="submit"
                                            className="button col-half"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {show && (
                    <>
                        <div className={`modal-overlay`}></div>
                        <div className="modal-box">
                            <PlansForm
                                handleShow={handleShow}
                            />
                        </div>
                    </>
                )}
            </section>
        </>
    );
};

export default Plans;

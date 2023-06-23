import React from "react";
import { Link } from "react-router-dom";
const TrainerDetail = ({ data }) => {
    function handleOnClick() {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <div className="models-div__box">
                <div className="models-div__box__img">
                    <img src={data.img} alt="trainer_img" />
                </div>

                <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                        <div className="models-div__box__descr__name-price__name">
                            <p>{data.name}</p>
                            <span>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </span>
                        </div>
                        <div className="models-div__box__descr__name-price__price">
                            <h4>{data.price}$</h4>
                            <p>per day</p>
                        </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                        <span>
                            <i className="fa-solid fa-dumbbell"></i> &nbsp;
                            {data.location}
                        </span>
                    </div>
                    <Link
                        onClick={handleOnClick}
                        className="button models-div__box__descr__name-price__btn"
                        to="/"
                    >
                        Book Schedule
                    </Link>
                </div>
            </div>
        </>
    );
};

export default TrainerDetail;

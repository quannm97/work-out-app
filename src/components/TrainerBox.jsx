import React, { useState } from "react";

const TrainerBox = ({ data, id }) => {
    const [trainerLoad, setTrainerLoad] = useState(true);


    return (
        <>
            <div className="trainer-detail">
                {/* Image */}
                <div className="picked-trainer">
                    {trainerLoad && <span className="loader"></span>}
                    <img
                        style={{ display: trainerLoad ? "none" : "block" }}
                        src={data.img}
                        alt="trainer_img"
                        onLoad={() => setTrainerLoad(false)}
                    ></img>
                </div>
                {/* Description */}
                <div className="pick-description">
                    <div className="pick-description__price">
                        <span>${data.price}</span>/ rent per day
                    </div>
                    <div className="pick-description__table">
                        <div className="pick-description__table__col">
                            <span>Name</span>
                            <span>{data.name}</span>
                        </div>

                        <div className="pick-description__table__col">
                            <span>Age</span>
                            <span>{data.age}</span>
                        </div>

                        <div className="pick-description__table__col">
                            <span>Location</span>
                            <span>{data.location}</span>
                        </div>

                        <div className="pick-description__table__col">
                            <span>Description</span>
                            <span>{data.description}</span>
                        </div>

                        <a className="cta-btn" href="#plans-section">
                            Reserve Now
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrainerBox;

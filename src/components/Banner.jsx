import React from "react";

const Banner = () => {
    return (
        <>
            <section className="banner-section">
                <div className="container">
                    <div className="banner-content">
                        <div className="img-side clearfix"></div>
                        <div className="text-side clearfix">
                            <div>
                                <h2>Stay fit with our smart Plans</h2>
                                <p>
                                    Top Trainers. Sexy Plans. <span>24/7</span>{" "}
                                    Support.
                                </p>
                            </div>
                        </div>
                        <a href="#home">
                            <button className="button">
                                Book Ride &nbsp;{" "}
                                <i className="fa-solid fa-circle-check"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;

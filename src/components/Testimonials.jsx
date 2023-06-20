import React from "react";
import Img1 from "../images/testimonials/user1.jpg";

const Testimonials = () => {
    return (
        <>
            <section className="testimonials-section">
                <div className="container">
                    <div className="testimonials-content">
                        <div className="testimonials-content__title">
                            <h4>Reviewed by People</h4>
                            <h2>Client's Testimonials</h2>
                            <p>
                                We value your comfort and aim to create a
                                welcoming environment. Our friendly team is here
                                to assist you and ensure your satisfaction. Feel
                                free to express yourself and let us know how we
                                can help. Your needs are our priority.
                            </p>
                        </div>

                        <div className="all-testimonials">
                            <div className="all-testimonials__box">
                                <span className="quotes-icon">
                                    <i className="fa-solid fa-quote-right"></i>
                                </span>
                                <p>
                                    "The rem value is the same as the em value
                                    displayed above. Both units are scalable."
                                </p>
                                <div className="all-testimonials__box__name">
                                    <div className="all-testimonials__box__name__profile">
                                        <img src={Img1} alt="user_img" />
                                        <span>
                                            <h4>Babby Bobber</h4>
                                            <p>Ha Noi</p>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="all-testimonials__box box-2">
                                <span className="quotes-icon">
                                    <i className="fa-solid fa-quote-right"></i>
                                </span>
                                <p>
                                    "The rem value is the same as the em value
                                    displayed above. Both units are scalable."
                                </p>
                                <div className="all-testimonials__box__name">
                                    <div className="all-testimonials__box__name__profile">
                                        <img src={Img1} alt="user_img" />
                                        <span>
                                            <h4>Cristofer Jonson</h4>
                                            <p>Novi Sad</p>
                                        </span>
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

export default Testimonials;

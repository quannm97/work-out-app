import React, { useState } from "react";

const Faq = () => {
    const [activeQ, setActiveQ] = useState("q1");

    const openQ = (id) => {
        setActiveQ(activeQ === id ? "" : id);
    };

    const getClassAnswer = (id) => {
        return activeQ === id ? "active-answer" : "";
    };

    const getClassQuestion = (id) => {
        return activeQ === id ? "active-question" : "";
    };

    return (
        <>
            <section className="faq-section">
                <div className="container">
                    <div className="faq-content">
                        <div className="faq-content__title">
                            <h5>FAQ</h5>
                            <h2>Frequently Asked Questions</h2>
                            <p>
                                We prioritize your security and privacy. Enjoy
                                the delightful experience of our services with
                                the assurance of confidentiality. Our
                                knowledgeable team is dedicated to meeting your
                                needs and providing the best possible solutions.
                            </p>
                        </div>

                        <div className="all-questions">
                            <div className="faq-box">
                                <div
                                    id="q1"
                                    onClick={() => openQ("q1")}
                                    className={`faq-box__question  ${getClassQuestion(
                                        "q1"
                                    )}`}
                                >
                                    <p>
                                        1. What is special about comparing
                                        workout options?
                                    </p>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div
                                    id="q1"
                                    onClick={() => openQ("q1")}
                                    className={`faq-box__answer ${getClassAnswer(
                                        "q1"
                                    )}`}
                                >
                                    Customization: By comparing different
                                    workout options, you can find the ones that
                                    best align with your fitness goals,
                                    preferences, and abilities. Whether you're
                                    looking for strength training, cardio
                                    exercises, yoga, or other forms of workouts,
                                    comparing options allows you to tailor your
                                    fitness routine to suit your needs.
                                </div>
                            </div>
                            <div className="faq-box">
                                <div
                                    id="q2"
                                    onClick={() => openQ("q2")}
                                    className={`faq-box__question ${getClassQuestion(
                                        "q2"
                                    )}`}
                                >
                                    <p>
                                        2. How do I find the best workout deals?
                                    </p>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div
                                    id="q2"
                                    onClick={() => openQ("q2")}
                                    className={`faq-box__answer ${getClassAnswer(
                                        "q2"
                                    )}`}
                                >
                                    Research Online: Start by searching online
                                    platforms that specialize in fitness deals,
                                    such as fitness websites, coupon websites,
                                    or deal aggregator websites. These platforms
                                    often feature discounted workout classes,
                                    gym memberships, fitness equipment, or
                                    online workout programs. Look for deals
                                    specific to your location or preferred
                                    workout type.
                                </div>
                            </div>
                            <div className="faq-box">
                                <div
                                    id="q3"
                                    onClick={() => openQ("q3")}
                                    className={`faq-box__question ${getClassQuestion(
                                        "q3"
                                    )}`}
                                >
                                    <p>
                                        3. How do I find such affordable workout
                                        options?
                                    </p>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div
                                    id="q3"
                                    onClick={() => openQ("q3")}
                                    className={`faq-box__answer ${getClassAnswer(
                                        "q3"
                                    )}`}
                                >
                                    Research Membership Plans: Explore different
                                    fitness centers, gyms, or studios in your
                                    area and compare their membership plans.
                                    Look for facilities that offer discounted
                                    rates, introductory offers, or flexible
                                    payment options that fit your budget.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;

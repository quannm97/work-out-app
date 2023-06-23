import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <ul className="footer-content__1">
                            <li>
                                <span>Trainer</span> Rental
                            </li>
                            <li>
                            Fitness made easy. Join our workout website for expert routines, nutrition tips, and a supportive community. Start your journey today!
                            </li>
                            <li>
                                <a href="tel:123456789">
                                    <i className="fa-solid fa-phone"></i> &nbsp;
                                    (84) -123-456
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto: 
              trainerrental@gmail.com"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                    &nbsp; trainerrental@gmail.com
                                </a>
                            </li>
                        </ul>

                        <ul className="footer-content__2">
                            <li>Company</li>
                            <li>
                                <a href="#home">Mar</a>
                            </li>
                            <li>
                                <a href="#home">Careers</a>
                            </li>
                            <li>
                                <a href="#home">Mobile</a>
                            </li>
                            <li>
                                <a href="#home">Blog</a>
                            </li>
                            <li>
                                <a href="#home">How we work</a>
                            </li>
                        </ul>

                        <ul className="footer-content__2">
                            <li>Working Hours</li>
                            <li>Mon - Fri: 8:00AM - 9:00PM</li>
                            <li>Sat: 9:00AM - 2:00PM</li>
                            <li>Sun: Closed</li>
                        </ul>

                        <ul className="footer-content__2">
                            <li>Subscription</li>
                            <li>
                                <p>
                                    Subscribe your Email address for latest news
                                    & updates.
                                </p>
                            </li>
                            <li>
                                <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                ></input>
                            </li>
                            <li>
                                <button className="button submit-email">
                                    Submit
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

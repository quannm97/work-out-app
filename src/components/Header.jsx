import React, { useState } from "react";
import Logo from "../images/logo/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    };
    return (
        <>
            <header>
                {/* mobile */}
                <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
                    <div onClick={openNav} className="mobile-navbar__close">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <ul className="mobile-navbar__links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/equipments">Equipments</Link>
                        </li>
                        <li>
                            <Link to="/testimonials">Testimonials</Link>
                        </li>
                        <li>
                            <Link to="/team">Our Team</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* desktop */}
                <div className="container">
                    <div className="navbar">
                        <div className="navbar__logo">
                            <Link
                                to="/"
                                onClick={() => {
                                    window.top(0, 0);
                                }}
                            >
                                <img src={Logo} alt="logo-img" />
                            </Link>
                        </div>
                        <ul className="navbar__links">
                            <li>
                                <Link className="home-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="about-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="models-link" to="/equipments">
                                Equipments
                                </Link>
                            </li>
                            <li>
                                <Link className="testi-link" to="/testimonials">
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link className="team-link" to="/team">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link className="contact-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="navbar__buttons">
                            <Link className="navbar__buttons__sign-in" to="/">
                                Sign In
                            </Link>
                            <Link className="navbar__buttons__register" to="/">
                                Register
                            </Link>
                        </div>

                        {/* mobile */}
                        <div className="mobile-hamb" onClick={openNav}>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

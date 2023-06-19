import React from "react";
import Logo from "../images/logo/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="navbar">
                        <div className="navbar__logo">
                            <Link to="/" onClick={() => {window.top(0, 0)}}>
                            <img src={Logo} alt="logo-img" />
                            </Link>
                        </div>
                        <ul className="navbar__links">
                            <li>Home</li>
                            <li>About</li>
                            <li>Equipments</li>
                            <li>Testimonials</li>
                            <li>Our Team</li>
                            <li>Contact</li>
                        </ul>
                        <div className="navbar__buttons">
                            <Link className="navbar__buttons__sign-in" to="/">
                                Sign In
                            </Link>
                            <Link className="navbar__buttons__register" to="/">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

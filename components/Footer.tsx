import React from "react";
import FooterLogo from "../public/Img/Header/logo.svg";
import Instagram from "../public/Img/Footer/instagram.svg";
import Facebook from "../public/Img/Footer/facebook.svg";
import Twitter from "../public/Img/Footer/twitter.svg";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__logo">
                        <a className="footer__logoa" href="#">
                            <FooterLogo />
                        </a>
                        <div className="footer__logo-social">
                            <a href="#">
                                <Instagram />
                            </a>
                            <a href="#">
                                <Facebook />
                            </a>
                            <a href="#">
                                <Twitter />
                            </a>
                        </div>
                    </div>
                    <div className="footer__resource">
                        <div className="footer__resource-title footer-title">
                            Resource
                        </div>
                        <ul className="footer__resource-list">
                            <li>
                                {" "}
                                <a href="#">About Us</a>{" "}
                            </li>
                            <li>
                                {" "}
                                <a href="#">Blog</a>{" "}
                            </li>
                            <li>
                                {" "}
                                <a href="#">Contact</a>{" "}
                            </li>
                            <li>
                                {" "}
                                <a href="#">FAQ</a>{" "}
                            </li>
                        </ul>
                    </div>
                    <div className="footer__stuff">
                        <div className="footer__stuff-title footer-title">
                            Legal Stuff
                        </div>
                        <ul className="footer__stuff-list">
                            <li> <a href="#">Disclaimer</a> </li>
                            <li> <a href="#">Financing</a> </li>
                            <li> <a href="#">Privacy Policy</a> </li>
                            <li> <a href="#">Terms of Service</a> </li>
                        </ul>
                    </div>
                    <div className="footer__sign">
                        <div className="footer__sign-title footer-title">
                            knowing you're always on the best energy deal.
                        </div>
                        <input
                            type="text"
                            className="footer__sign-input"
                            placeholder="Enter your phone Number"
                        />
                        <input 
                            type="submit"
                            className="footer__sign-button"
                            value="Sign up Now"
                        />
                    </div>
                </div>
                <div className="footer__made">
                    Made With Love By Figmaland All Right Reserved
                </div>
            </div>
        </div>
    );
};

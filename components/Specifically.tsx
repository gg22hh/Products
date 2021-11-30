import React from "react";
import SpecIcon1 from "../public/Img/specifically/spec-icon1.svg"
import SpecIcon2 from "../public/Img/specifically/spec-icon2.svg"
import SpecIcon3 from "../public/Img/specifically/spec-icon3.svg"
import SpecIcon4 from "../public/Img/specifically/spec-icon4.svg"

export const Specifically = () => {
    return (
        <div className="specifically">
            <div className="container">
                <div className="specifically__inner">
                    <div className="specifically__title">
                        Product was Built Specifically for You
                    </div>
                    <ul className="specifically__list">
                        <li className="specifically__item">
                            <SpecIcon1 className="specifically__icon" />
                            <div className="specifically__item-title title-1">
                                First click tests
                            </div>
                            <div className="specifically__text">
                                While most people enjoy casino gambling,
                            </div>
                        </li>
                        <li className="specifically__item">
                            <SpecIcon2 className="specifically__icon" />
                            <div className="specifically__item-title title-2">
                                Design surveys
                            </div>
                            <div className="specifically__text">
                                Sports betting, lottery and bingo playing for
                                the fun
                            </div>
                        </li>
                        <li className="specifically__item">
                            <SpecIcon3 className="specifically__icon" />
                            <div className="specifically__item-title title-3">
                                Preference tests
                            </div>
                            <div className="specifically__text">
                                The Myspace page defines the individual.
                            </div>
                        </li>
                        <li className="specifically__item">
                            <SpecIcon4 className="specifically__icon" />
                            <div className="specifically__item-title title-4">
                                Five second tests
                            </div>
                            <div className="specifically__text">
                                Personal choices and the overall personality of
                                the person.
                            </div>
                        </li>
                    </ul>
                    <a href="#" className="specifically__button">
                        Sign up now
                    </a>
                </div>
            </div>
        </div>
    );
};

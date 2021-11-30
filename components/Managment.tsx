import React from "react";
import ManagmentBg from "../public/Img/managment-bg.svg";
import ManagmentBgAdaptive from "../public/Img/managment-bg-adaptive.svg";

export const Managment = () => {
    return (
        <div className="managment">
            <div className="container">
                <div className="managment__inner">
                    <div className="managment__content">
                        <div className="managment__content-uptitle subtitle">
                            Effortless Validation for
                        </div>
                        <div className="managment__content-title title">
                            Management
                        </div>
                        <div className="managment__content-text">
                            The Myspace page defines the individual, his or her
                            characteristics, traits, personal choices and the
                            overall personality of the person.
                        </div>
                        <div className="managment__content-subtitle subtitle">
                            Accessory makers
                        </div>
                        <div className="managment__content-text">
                            While most people enjoy casino gambling, sports
                            betting, lottery and bingo playing for the fun
                        </div>
                        <div className="managment__content-subtitle subtitle">
                            Alterationists
                        </div>
                        <div className="managment__content-text">
                            If you are looking for a new way to promote your
                            business that won’t cost you more money,
                        </div>
                    </div>
                    <div className="managment__image">
                        <div className="managment__image-notadaptive">
                            <ManagmentBg />
                        </div>
                        <div className="managment__image-adaptive">
                            <ManagmentBgAdaptive />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

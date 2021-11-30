import React from "react";
import BannerImg from "../public/Img/Banner/banner-image.svg";
import BannerImgAdaptive from "../public/Img/Banner/banner-image-adaptive.svg";

export const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner__inner">
                    <div className="banner__img">
						<div className="banner__img-notadaptive"><BannerImg /></div>
                        <div className="banner__img-adaptive"><BannerImgAdaptive /></div>
                    </div>
                    <div className="banner__content">
                        <div className="banner__content-title">
                            Work at the speed <br /> of thought
                        </div>
                        <div className="banner__content-text">
                            Tools, tutorials, design and innovation experts, all
                            in one place! The most intuitive way to imagine your
                            next user experience.
                        </div>
                        <div className="banner__content-buttons">
                            <a href="#" className="get__started-btn">
                                Get Started
                            </a>
                            <a href="#" className="watch-btn">
                                Watch the Video
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

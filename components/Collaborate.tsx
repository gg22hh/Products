import React from "react";
import CollaborateBg from "../public/Img/collaborate-bg.svg";
import CollaborateBgAdaptive from "../public/Img/collaborate-bg-adaptive.svg";

export const Collaborate = () => {
    return (
        <div className="collaborate">
            <div className="container">
                <div className="collaborate__inner">
                    <div className="collaborate__content">
                        <div className="collaborate__content-uptitle subtitle">
                            Optimisation for
                        </div>
                        <div className="collaborate__content-title title">
                            Collaborative
                        </div>
                        <div className="collaborate__content-text">
                            Few would argue that, despite the advancements of
                            feminism over the past three decades, women still
                            face a double standard when it comes to their
                            behavior.
                        </div>
                        <div className="collaborate__content-subtitle subtitle">
                            Accessory makers
                        </div>
                        <div className="collaborate__content-text">
                            While most people enjoy casino gambling, sports
                            betting, lottery and bingo playing for the fun
                        </div>
                        <div className="collaborate__content-subtitle subtitle">
                            Alterationists
                        </div>
                        <div className="collaborate__content-text">
                            If you are looking for a new way to promote your
                            business that won’t cost you more money,
                        </div>
                    </div>
                    <div className="collaborate__image">
                        <div className="collaborate__image-notadaptive">
                            <CollaborateBg />
                        </div>
                        <div className="collaborate__image-adaptive">
                            <CollaborateBgAdaptive />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

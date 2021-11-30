import React from "react";
import Airbnb from "../public/Img/Clients/clients-airbnb.svg";
import FedEx from "../public/Img/Clients/clients-fedex.svg";
import Google from "../public/Img/Clients/clients-google.svg";
import Microsoft from "../public/Img/Clients/clients-microsoft.svg";

export const Clients = () => {
    return (
        <div className="clients">
            <div className="container">
                <div className="clients__inner">
                    <div className="clients__title">Our Clients</div>
                    <div className="clients__list">
                        <div>
                            <a href="#">
                                <Airbnb />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <Google />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <Microsoft />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <FedEx />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from 'react'
import JoinImage1 from "../public/Img/Join/join-image1.svg"
import JoinImage2 from "../public/Img/Join/join-image2.svg"

export const Join = () => {
	return (
        <div className="join">
            <div className="container">
                <div className="join__inner">
                    <div className="join__title">
                        Join thousand of other who have already received offers
                    </div>
                    <div className="join__items">
                        <div className="join__item">
                            <div className="join__item-image"><JoinImage1 /></div>
                            <div className="join__item-title">Business</div>
                            <ul className="join__item-list">
                                <li>Cash Flow</li>
                                <li>Asset Backed</li>
                                <li>Receivables Finance</li>
                            </ul>
                            <div className="join__item-subtitle">
                                Find the best business product
                            </div>
                        </div>
                        <div className="join__item">
                            <div className="join__item-image"><JoinImage2 /></div>
                            <div className="join__item-title">Enterprise</div>
                            <ul className="join__item-list">
                                <li>Site Acquisition</li>
                                <li>Bridge</li>
                                <li>Development Financing</li>
                            </ul>
                            <div className="join__item-subtitle">
                                Find the best business product
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react'
import Image1 from "../public/Img/Work/image1.svg"
import Image2 from "../public/Img/Work/image2.svg"
import Image3 from "../public/Img/Work/image3.svg"
import Image1Adaptive from "../public/Img/Work/image1-adaptive.svg"
import Image2Adaptive from "../public/Img/Work/image2-adaptive.svg";
import Image3Adaptive from "../public/Img/Work/image3-adaptive.svg";

export const Work = () => {
	return (
        <div className="work">
            <div className="container">
                <div className="work__inner">
                    <div className="work__title">How Product Work?</div>
                </div>
                <div className="work__items">
                    <div className="work__item">
                        <div className="work__item-image">
                            <div className="work__item-image-notadaptive">
                                <Image1 />
                            </div>
                            <div className="work__item-image-adaptive">
                                <Image1Adaptive />
                            </div>
                        </div>
                        <div className="work__item-content">
                            <div className="work__item-uptitle">STEP 1</div>
                            <div className="work__item-title">
                                Apply for a product
                            </div>
                            <div className="work__item-text">
                                Completing our easy step-by-step application
                                form gives you access to multiple business with
                                multiple products. We analyse your business
                                through our proprietary credit analysis
                                technology
                            </div>
                        </div>
                    </div>
                    <div className="work__item">
                        <div className="work__item-image order2">
                            <div className="work__item-image-notadaptive">
                                <Image2 />
                            </div>
                            <div className="work__item-image-adaptive">
                                <Image2Adaptive />
                            </div>
                        </div>
                        <div className="work__item-content order1">
                            <div className="work__item-uptitle">STEP 2</div>
                            <div className="work__item-title">
                                Pay fully refundable
                            </div>
                            <div className="work__item-text">
                                Product will contactting you instantly to
                                receive payment of the Application Fee. if no
                                offer of product is available, your fee will be
                                fully refunded.
                            </div>
                        </div>
                    </div>
                    <div className="work__item">
                        <div className="work__item-image">
                            <div className="work__item-image-notadaptive">
                                <Image3 />
                            </div>
                            <div className="work__item-image-adaptive">
                                <Image3Adaptive />
                            </div>
                        </div>
                        <div className="work__item-content">
                            <div className="work__item-uptitle">STEP 3</div>
                            <div className="work__item-title">Completion</div>
                            <div className="work__item-text">
                                Product will continue to liase between borrower
                                and manager to procees and complete a quick and
                                efficient settlement
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work__button">
                    <a href="#">Get in touch with us</a>
                </div>
            </div>
        </div>
    );
}

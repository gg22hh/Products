import React from 'react'
import AdvertisingImg from "../public/Img/advertising-img.svg"
import AdvertisingImgAdaptive from "../public/Img/advertising-img-adaptive.svg"

export const Advertising = () => {
	return (
        <div className="advertising">
            <div className="container">
                <div className="advertising__inner">
                    <div className="advertising__content">
                        <div className="advertising__content-text">
                            Join 100 Compannies who boost their business with
                            Product
                        </div>
                        <a href="#" className="advertising__content-button">
                            Get This
                        </a>
                    </div>
                    <div className="advertising__image">
                        <div className="advertising__image-notadaptive">
                            <AdvertisingImg />
                        </div>
                        <div className="advertising__image-adaptive">
                            <AdvertisingImgAdaptive />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

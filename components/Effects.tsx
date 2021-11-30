import React from 'react'
import EffectsImage from "../public/Img/Effects/effects-image-notadaptive.svg"
import EffectsImageAdaptive from "../public/Img/Effects/effects-image-adaptive.svg"

export const Effects = () => {
	return (
        <div className="effects">
            <div className="container">
                <div className="effects__inner">
                    <div className="effects__title">
                        Product is being used with great effects alongside:
                    </div>
                    <div className="effects__content">
                        <div className="effects__image">
                            <div className="effects__image-adaptive"></div>
                            <div className="effects__image-notadaptive"><EffectsImage /></div>
                        </div>
                        <ul className="effects__items">
                            <li className="effects__item">
                                <div className="effects__item-title1">
                                    Enterpreneur
                                </div>
                                <div className="effects__item-text">
                                    Product is a great way to help medium and
                                    samall enterprise owners achieve their goals
                                </div>
                            </li>
                            <li className="effects__item">
                                <div className="effects__item-title2">
                                    Accountants
                                </div>
                                <div className="effects__item-text">
                                    Whether you are working on contract with
                                    clients, or on other key accounting
                                    documents, Product is for you
                                </div>
                            </li>
                            <li className="effects__item">
                                <div className="effects__item-title3">
                                    Universities
                                </div>
                                <div className="effects__item-text">
                                    Organize university projects and have
                                    documents easily graded online with Product
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

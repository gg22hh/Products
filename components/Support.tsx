import React from 'react'
import SupportBg from '../public/Img/support-bg.svg'
import SupportBgAdaptive from '../public/Img/support-bg-adaptive.svg'

export const Support = () => {
	return (
        <div className="support">
            <div className="container">
                <div className="support__inner">
                    <div className="support__image">
                        <div className="support__image-notadaptive">
                            <SupportBg />
                        </div>
                        <div className="support__image-adaptive">
                            <SupportBgAdaptive />
                        </div>
                    </div>
                    <div className="support__content">
                        <div className="support__content-uptitle subtitle">
                            Easier decision making for
                        </div>
                        <div className="support__content-title title">
                            Customer Support
                        </div>
                        <div className="support__content-text">
                            The Myspace page defines the individual, his or her
                            characteristics, traits, personal choices and the
                            overall personality of the person.
                        </div>
                        <ul className="support__content-list">
                            <li className="support__content-item1">
                                Never worry about overpaying for your energy
                                again.
                            </li>
                            <li className="support__content-item2">
                                We will only switch you to energy companies that
                                we trust and will treat you right
                            </li>
                            <li className="support__content-item3">
                                We track the markets daily and know where the
                                savings are.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

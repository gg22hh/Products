import React from 'react'
import Icon1 from "../public/Img/Reason/reason-icon1.svg"
import Icon2 from "../public/Img/Reason/reason-icon2.svg"
import Icon3 from "../public/Img/Reason/reason-icon3.svg"

export const Reason = () => {
	return (
        <div className="reason">
            <div className="container">
                <div className="reason__inner">
                    <div className="reason__title">Why Choose Product?</div>
                    <div className="reason__list">
                        <div className="reason__item">
                            <div className="reason__item-image">
                                <Icon1 />
                            </div>
                            <div className="reason__item-title">
                                Special Business
                            </div>
                            <div className="reason__item-text">
                                Product helps you see how many more days you
                                need to work to reach your financial goal for
                                the month and year.
                            </div>
                        </div>
                        <div className="reason__item">
                            <div className="reason__item-image">
                                <Icon2 />
                            </div>
                            <div className="reason__item-title">
                                Instant Result
                            </div>
                            <div className="reason__item-text">
                                Product helps you see how many more days you
                                need to work to reach your financial goal for
                                the month and year.
                            </div>
                        </div>
                        <div className="reason__item">
                            <div className="reason__item-image">
                                <Icon3 />
                            </div>
                            <div className="reason__item-title">
                                Fastest way to organize
                            </div>
                            <div className="reason__item-text">
                                Product helps you see how many more days you
                                need to work to reach your financial goal for
                                the month and year.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

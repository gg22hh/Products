import React from 'react'
import Expert1 from '../public/Img/Experts/expert1.svg'
import Expert2 from '../public/Img/Experts/expert2.svg'
import Expert3 from '../public/Img/Experts/expert3.svg'
import Expert4 from '../public/Img/Experts/expert4.svg'

export const Experts = () => {
	return (
        <div className="experts">
            <div className="container">
                <div className="experts__inner">
                    <div className="experts__title title">
                        Quick & Easy Process
                    </div>
                    <div className="experts__subtitle">
                        Do you require some help for your project: Conception
                        workshop, prototyping, marketing strategy, landing page,
                        Ux/UI?
                    </div>
                    <ul className="experts__content">
                        <li>
                            <Expert1 />
                            <span>I can take care of your pitch</span>
                        </li>
                        <li>
                            <span>I can prototype your app</span> <Expert2 />
                        </li>
                        <li>
                            <span>I can design you website</span> <Expert3 />
                        </li>
                        <li>
                            <Expert4 />
                            <span>I can help marketing strategy</span>
                        </li>
                    </ul>
					<a href="#" className="experts__button">Contact our experts</a>
                </div>
            </div>
        </div>
    );
}

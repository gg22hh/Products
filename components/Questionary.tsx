import React from 'react'
import { QuestionaryButton } from './QuestionaryButton';

export const Questionary = () => {
	return (
        <div className="questionary">
            <div className="container">
                <div className="questionary__inner">
                    <div className="questionary__title">
                        Frequently asked question
                    </div>
                    <div className="questionary__subtitle">
                        Something is not clear? You need help? Check our FAQ
                        section
                    </div>
                    <div className="questionary__content">
                        <div className="questionary__item">
                            <QuestionaryButton plus="minus">egsdoihnl</QuestionaryButton >
                            <div className="questionary__item-text">
                                After creating your account you will have an
                                oppurtunity to create your first project that
                                will be associated withthe collaborators e-mail.
                                An invitation will be sent automatically. Then,
                                invited user will have to confirm his account by
                                e-mail and finish userd onboarding.
                            </div>
                        </div>
                        <div className="questionary__item">
                            <button className="questionary__item-button">
                                How can I invite collaborator to platform?
                            </button>
                            <div className="questionary__item-text">
                                After creating your account you will have an
                                oppurtunity to create your first project that
                                will be associated withthe collaborators e-mail.
                                An invitation will be sent automatically. Then,
                                invited user will have to confirm his account by
                                e-mail and finish userd onboarding.
                            </div>
                        </div>
                        <div className="questionary__item">
                            <button className="questionary__item-button">
                                Can I upgrade my plan?
                            </button>
                            <div className="questionary__item-text">
                                After creating your account you will have an
                                oppurtunity to create your first project that
                                will be associated withthe collaborators e-mail.
                                An invitation will be sent automatically. Then,
                                invited user will have to confirm his account by
                                e-mail and finish userd onboarding.
                            </div>
                        </div>
                        <div className="questionary__item">
                            <button className="questionary__item-button">
                                Can I cancel my plan at anytime?
                            </button>
                            <div className="questionary__item-text12">
                                After creating your account you will have an
                                oppurtunity to create your first project that
                                will be associated withthe collaborators e-mail.
                                An invitation will be sent automatically. Then,
                                invited user will have to confirm his account by
                                e-mail and finish userd onboarding.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

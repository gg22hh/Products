import React, { Children } from 'react'
import { Rating } from './Rating/Rating'

interface ReviewItemProps {
	reviewItemText: string;
	reviewAuthorName: string;
	reviewAuthorSpec: string;
	children
}

export const ReviewItem = ({reviewItemText, reviewAuthorName, reviewAuthorSpec, children}: ReviewItemProps) => {
	return (
        <div className="review__item">
            <div className="review__item-rating">
                <Rating rating={4} />
            </div>
            <div className="review__item-text">
                {reviewItemText}
            </div>
            <div className="review__item-author">
                <div className="review__item-author-avatar">
                    {children}
                </div>
                <div className="review__item-author-name">
                    <a className="author-name">{reviewAuthorName}</a>
                    <div className="author-spec">{reviewAuthorSpec}</div>
                </div>
            </div>
        </div>
    );
}

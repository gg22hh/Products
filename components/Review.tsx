import React from "react";
import { ReviewItem } from "./ReviewItem";
import Client1 from "../public/Img/Review/client-1.svg"
import Client2 from "../public/Img/Review/client-2.svg"
import Client3 from "../public/Img/Review/client-3.svg"

export const Review = () => {
    return (
        <div className="review">
            <div className="container">
                <div className="review__inner">
                    <div className="review__title title">What Clients Say</div>
                    <div className="review__subtitle">
                        Problems trying to resolve the conflict between the two
                        major realms of Classical physics: Newtonian mechanics
                    </div>
                    <div className="review__items">
                        <ReviewItem
                            reviewItemText={
                                "Product helps you see how many more days you need to work to reach your financial goal."
                            }
                            reviewAuthorName={"Wahid Ari"}
                            reviewAuthorSpec={"Designer"}
                        >
                            <Client1 />
                        </ReviewItem>
                        <ReviewItem
                            reviewItemText={
                                "Product helps you see how many more days you need to work to reach your financial goal."
                            }
                            reviewAuthorName={"Wahid Ari"}
                            reviewAuthorSpec={"Designer"}
                        >
                            <Client2 />
                        </ReviewItem>
                        <ReviewItem
                            reviewItemText={
                                "Product helps you see how many more days you need to work to reach your financial goal."
                            }
                            reviewAuthorName={"Wahid Ari"}
                            reviewAuthorSpec={"Designer"}
                        >
                            <Client3 />
                        </ReviewItem>
                    </div>
                </div>
            </div>
        </div>
    );
};


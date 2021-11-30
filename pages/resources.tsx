import React, { FC } from "react";
import { MainLayout } from "../components/MainLayout";

const data = [
    {
        id: 1,
        // img: <StrategiesImg1 />,
        author: "Wahid Ari",
        title: "Increasing Prosperity With Positive Thinking",
    },
    {
        id: 2,
        // img: <StrategiesImg2 />,
        author: "Wahid Ari",
        title: "Motivation Is The First Step To Success",
    },
]

const Resources: FC = () => {
    return (
        <MainLayout title="Resources" metaDescription="Resources Page">
            {data.map((slide) => (
                <div key={slide.id}>
                    <div className="strategies__swiper">
                        <div className="strategies__swiper-img">
                            
                        </div>
                        <a href="#">
                            <div className="strategies__swiper-author">
                                By <a href="#">{slide.author}</a> | 03 March
                                2019
                            </div>
                            <div className="strategies__swiper-title">
                                {slide.title}
                            </div>
                        </a>
                    </div>
                </div>
            ))}
        </MainLayout>
    );
};

export default Resources;

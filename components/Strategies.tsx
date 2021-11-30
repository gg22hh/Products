import React from "react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import StrategiesImg1 from "../public/Img/strategies/strategies-img1.svg";
import StrategiesImg2 from "../public/Img/strategies/strategies-img2.svg";
import StrategiesImg3 from "../public/Img/strategies/strategies-img3.svg";

SwiperCore.use([Pagination, Autoplay]);

const data = [
    {
        id: 1,
        img: <StrategiesImg1 />,
        author: "Wahid Ari",
        title: "Increasing Prosperity With Positive Thinking",
    },
    {
        id: 2,
        img: <StrategiesImg2 />,
        author: "Wahid Ari",
        title: "Motivation Is The First Step To Success",
    },
    {
        id: 3,
        img: <StrategiesImg3 />,
        author: "Wahid Ari",
        title: "Success Steps For Your Personal Or Business",
    },
    {
        id: 4,
        img: <StrategiesImg2 />,
        author: "Wahid Ari",
        title: "Increasing Prosperity With Positive Thinking",
    },
    {
        id: 5,
        img: <StrategiesImg3 />,
        author: "Wahid Ari",
        title: "Motivation Is The First Step To Success",
    },
    {
        id: 6,
        img: <StrategiesImg1 />,
        author: "Wahid Ari",
        title: "Success Steps For Your Personal Or Business",
    },
    {
        id: 7,
        img: <StrategiesImg3 />,
        author: "Wahid Ari",
        title: "Increasing Prosperity With Positive Thinking",
    },
    {
        id: 8,
        img: <StrategiesImg1 />,
        author: "Wahid Ari",
        title: "Motivation Is The First Step To Success",
    },
    {
        id: 9,
        img: <StrategiesImg2 />,
        author: "Wahid Ari",
        title: "Success Steps For Your Personal Or Business",
    },
];

export const Strategies = () => {
    return (
        <div className="strategies">
            <div className="container">
                <div className="strategies__inner">
                    <div className="strategies__title title">
                        Contents Strategies
                    </div>
                    <div className="strategies__subtitle">
                        We focus on ergonomics and meeting you where you work.
                        It's only a keystroke away.
                    </div>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        pagination={{
                            clickable: true,
                        }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {data.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <div className="strategies__swiper">
                                    <div className="strategies__swiper-img">
                                        {slide.img}
                                    </div>
                                    <a href="#">
                                        <div className="strategies__swiper-author">
                                            By <a href="#">{slide.author}</a> |
                                            03 March 2019
                                        </div>
                                        <div className="strategies__swiper-title">
                                            {slide.title}
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    );
};

import React, { FC } from "react";
import { Advertising } from '../components/Advertising';
import { Banner } from '../components/Banner';
import { Collaborate } from '../components/Collaborate';
import { Experts } from '../components/Experts';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MainLayout } from '../components/MainLayout';
import { Managment } from '../components/Managment';
import { Price } from '../components/Price';
import { Review } from '../components/Review';
import { Specifically } from '../components/Specifically';
import { Strategies } from '../components/Strategies';
import { Support } from '../components/Support';

const Home: FC = () => {
    return (
        <MainLayout
            title="Home"
            metaDescription="Home page"
            backgroundImageName="homepage.jpg"
        >
            <Banner />
            <Specifically />
            <Managment />
            <Support />
            <Collaborate />
            <Experts />
            <Strategies />
            <Price
                priceTitle={"Price Table"}
                priceSubTitle={"We offer competitive price"}
            />
			<Review />
			<Advertising />
        </MainLayout> 	
    );
};

export default Home;


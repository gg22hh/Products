import React, { FC } from "react";
import { Effects } from '../components/Effects';
import { Enterprice } from '../components/Enterprice';
import { MainLayout } from "../components/MainLayout";
import { Pricingg } from '../components/Pricingg';
import { Questionary } from '../components/Questionary';

const Pricing: FC = () => {
    return (
        <MainLayout title="Prising" metaDescription="Prising Page">
            <Pricingg />
			<Enterprice />
			<Effects />
			<Questionary />
        </MainLayout>
    );
};

export default Pricing;

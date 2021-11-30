import React, { FC } from 'react'
import { Advertising } from '../components/Advertising';
import { Clients } from '../components/Clients';
import { Join } from '../components/Join';
import { MainLayout } from '../components/MainLayout'
import { Reason } from '../components/Reason';
import { Work } from '../components/Work';

const Customers: FC = () => {
	return (
        <MainLayout title="Customers" metaDescription="Customers Page">
            <Clients />
            <Reason />
            <Work />
            <Join />
            <Advertising />
        </MainLayout>
    );
}

export default Customers;

import React, { FC, useEffect } from "react";
import Head from "next/head";
import { Header } from './Header';
import { Footer } from './Footer';

interface Props {
    title: string;
    metaDescription: string;
    backgroundImageName?: string;
}

export const MainLayout: FC<Props> = ({
    children,
    title,
    metaDescription,
    backgroundImageName = "default.jpg",
}) => {
    return (
        <div className="app">
            <Head>
                <title>{title}</title>
                <meta name="description" content={metaDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
			<Header />
            <div className="main">{children}</div>
			<Footer />
        </div>
    );
};

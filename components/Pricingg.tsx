import React from 'react'
import { Price } from './Price';

export const Pricingg = () => {
	return (
        <div className="pricing">
            <div className="container">
                <div className="pricing__inner">
                    <div className="pricing__title">PRICING</div>
                    <Price
                        priceTitle="Let’s get some real work done here."
                        priceSubTitle="Prodict is your perfect solution for working. Get started now for free"
                    />
                </div>
            </div>
        </div>
    );
}

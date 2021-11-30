import React from "react";
import { PriceItems } from "./PriceItems";

interface PriceProps {
    priceTitle: string;
    priceSubTitle: string;
}

export const Price = ({ priceTitle, priceSubTitle }: PriceProps) => {
    return (
        <div className="price">
            <div className="container">
                <div className="price__inner">
                    <div className="price__title title">{priceTitle}</div>
                    <div className="price__subtitle">{priceSubTitle}</div>
                    <div className="price__items">
                        <PriceItems
                            itemTitle={"Free"}
                            itemSubtitle={"Brief price description"}
                            itemCost={0}
                            itemOperators={["Only", " ", 2]}
                        />
                        <PriceItems
                            itemTitle={"Standard"}
                            itemSubtitle={"Brief price description"}
                            itemCost={5}
                            itemOperators={[5, "+"]}
                        />
                        <PriceItems
                            itemTitle={"Premium"}
                            itemSubtitle={"Brief price description"}
                            itemCost={10}
                            itemOperators={[10, "+"]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from "react";

interface PriceItemsProps {
    itemTitle: string;
    itemSubtitle: string;
    itemCost: number;
    itemOperators: any;
}

export const PriceItems = ({
    itemTitle,
    itemSubtitle,
    itemCost,
    itemOperators,
}: PriceItemsProps) => {
    return (
        <div className="price__item">
            <div className="price__item-title">{itemTitle}</div>
            <div className="price__item-subtitle">{itemSubtitle}</div>
            <div className="price__item-cost">
                <div className="price__item-cost-number">{itemCost}</div>
                <div className="price__item-cost-value">
                    <div className="value">$</div>
                    <div className="month">Per / month</div>
                </div>
            </div>
            <ul className="price__item-list">
                <li>{itemOperators} Operators</li>
                <li>Notifications</li>
                <li>Landing Pages</li>
            </ul>
            <a href="#" className="price__item-button">
                Order Now
            </a>
        </div>
    );
};



import React from 'react'
import { NavLink } from './navLink';
import Button from '../public/Img/Header/theme-button.svg'

export const HeaderContent = ({active}) => {
	return (
        <div className={active ? "header__content active" : "header__content"}>
            <nav className="header__nav">
                <ul>
                    <NavLink text="Products" href="/" />
                    <NavLink text="Customers" href="/customers" />
                    <NavLink text="Pricing" href="/pricing" />
                    <NavLink text="Resources" href="/resources" />
                </ul>
            </nav>
            <div className="header__buttons">
                <a href="#" className="sign__in">
                    Sign In
                </a>
                <a href="#" className="sign__up">
                    Sign Up
                </a>
                <button className="theme">
                    <Button />
                </button>
            </div>
        </div>
    );
}

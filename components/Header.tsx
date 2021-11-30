import React, { useState } from "react";
import Logo from "../public/Img/Header/logo.svg";
import { HeaderContent } from './HeaderContent';



export const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="header__logo">
                        <Logo />
                    </a>
                    <HeaderContent active={menuActive} />
                    <button
                        className="header__burger"
                        onClick={() => setMenuActive((prevState) => !prevState)}
                    >
                        <span></span>
                    </button>
					<div className="header__adaptive"></div>
                </div>
				
            </div>
        </div>
    );
};

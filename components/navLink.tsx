import React, { FC } from "react";
import { useUserOnPage } from '../hooks';
import Link from "next/link"

interface Props {
    href: string;
	text: string;
}

export const NavLink: FC<Props> = ({href, text}) => {
	const isUserInPage = useUserOnPage(href)

    return (
        <li>
            <Link href={href}>
                <a
                    className={`header__nav-link ${
                        isUserInPage ? "active" : ""
                    }`}
                >
                    {text}
                </a>
            </Link>
        </li>
    );
};

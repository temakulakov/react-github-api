import React from 'react';
import {Link} from "react-router-dom";

export function Navigation() {
    return <nav className={"flex justify-between items-center h-[50px] px-5 "}>
        <h3 className={"mr-2 font-source-pro"}>GitHub search</h3>
        <span>
            <Link to={"/"} className={"mr-2 font-source-pro"}>Home</Link>
            <Link to={"/favourites"} className={"font-source-pro"}>Favourites</Link>
        </span>
    </nav>
}
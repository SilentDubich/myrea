import React from "react";
import UpMenu from '../../CssModules/UpperMenu/UpperMenu.module.css'

function Navigate() {
    return (
        <nav className={`${UpMenu.container__menu}`}>
            <ul className={`${UpMenu.container__menu_flex}`}>
                {/*<li><a href="">Main</a></li>*/}
                {/*<li><a href="">About Us</a></li>*/}
                {/*<li><a href="">Catalog</a></li>*/}
                {/*<li className="right">*/}
                {/*    <a href="/about">Contacts</a>*/}
                {/*</li>*/}
            </ul>
        </nav>
    )
}

export default Navigate
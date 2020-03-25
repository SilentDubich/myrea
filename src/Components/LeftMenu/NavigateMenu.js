import React from "react";
import MenuLeft from '../../CssModules/LeftMenu/menu.module.css'
import {NavLink} from "react-router-dom";
function LeftMenu(props) {
    return(
        <nav>
            <ul className={`${MenuLeft.container__menu_grid}`}>
                <li>
                    <NavLink to='/profile' className={`${MenuLeft.container__menu_decoration}`}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/feed' className={`${MenuLeft.container__menu_decoration}`}>News</NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs' className={`${MenuLeft.container__menu_decoration}`}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to='/friends' className={`${MenuLeft.container__menu_decoration}`}>Friends</NavLink>
                </li>
                <li>
                    <NavLink to='/settings' className={`${MenuLeft.container__menu_decoration}`}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default LeftMenu

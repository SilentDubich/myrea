import React, {FC} from "react";
import MenuLeft from '../../CssModules/LeftMenu/menu.module.css'
import {NavLink} from "react-router-dom";


type mapStateToPropsType = {
    freshDialogs: number
    setProfile: (val: boolean) => void
}

export const NavigateMenu: FC<mapStateToPropsType> = (props) => {
    let goToMyProfile = () => {
        props.setProfile(true)
    }
    return (
        <nav>
            <ul className={`${MenuLeft.container__menu_grid}`}>
                <li>
                    <NavLink onClick={goToMyProfile} to='/profile'
                             className={`${MenuLeft.container__menu_decoration}`}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs' className={`${MenuLeft.container__menu_decoration}`}>Messages
                        {props.freshDialogs > 0 && ' +' + props.freshDialogs}
                    </NavLink>

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

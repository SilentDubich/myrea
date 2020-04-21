import React from "react";
import MenuLeft from '../../CssModules/LeftMenu/menu.module.css'
import {NavLink} from "react-router-dom";
import {setProfile} from "../DataBases/Reducers/ProfileInfoReducer";
function LeftMenu(props) {
    let goToMyProfile = () => {
        props.dispatch(setProfile(true))
    }
    return(
        <nav>
            <ul className={`${MenuLeft.container__menu_grid}`}>
                <li>
                    <NavLink onClick={goToMyProfile} to='/profile' className={`${MenuLeft.container__menu_decoration}`}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/feed' className={`${MenuLeft.container__menu_decoration}`}>News</NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs' className={`${MenuLeft.container__menu_decoration}`}>Messages
                        {props.state.messageReducer.freshDialogs > 0 && props.state.messageReducer.freshDialogs}
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

export default LeftMenu

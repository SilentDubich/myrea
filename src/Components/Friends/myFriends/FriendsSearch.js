import React from "react";
import Friends from '../../../CssModules/Friends/Friends.module.css'
import Dialog from "../../../CssModules/Dialog/DialogFriend.module.css";
import {NavLink} from "react-router-dom";
import Content from "../../../CssModules/content.module.css";


function FriendsSearch(props) {
    return(
        <div className={Friends.container__displayFlex}>
            <input placeholder='Search friend...' className={`${Dialog.input__width} ${Dialog.input__decor} ${Dialog.input__padding}`}/>
            <NavLink to='users'>
                <button className={`${Content.content__asideRightButton_decor} ${Content.content__asideRightButtonPadding}`}>Find friends</button>
            </NavLink>
        </div>
    )
}

export default FriendsSearch
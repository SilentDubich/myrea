import React from "react";
import {NavLink} from "react-router-dom";
import Dialog from "../../../../CssModules/Dialog/DialogFriend.module.css";
import Friend from "../../../../CssModules/Profile/FriendList/Friends.module.css";

function ThatFriend(props) {
    // debugger
    return (
        <div>
            <NavLink to={'/profile/' + props.id}
                     className={`${Dialog.display__flex} ${Dialog.hover__decor} ${Dialog.NavLinks__fontsDecor}`}>
                <div>
                    <img className={`${Friend.Friend__Ava} ${Dialog.display__AvaPosition}`} src={props.img} alt='Ava'/>
                </div>
                <div className={Dialog.border__borderBottom}>
                    <p className={`${Dialog.text__NameFontsDecor}`}>{`${props.name} ${props.lastName}`}</p>
                </div>
            </NavLink>
        </div>
    )
}

export default ThatFriend
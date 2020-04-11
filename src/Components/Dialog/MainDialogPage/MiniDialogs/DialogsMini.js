import React from "react";
import {BrowserRouter, NavLink} from "react-router-dom";
import Dialog from "../../../../CssModules/Dialog/DialogFriend.module.css";
import Friend from "../../../../CssModules/Profile/FriendList/Friends.module.css";

function MiniDialogs(props) {
    // debugger
    let get = () => {
        props.getDialogs(props.id)
        console.log('click');
    }
    return (
        <div onClick={get}>
            <NavLink to={'/dialog/' + props.id}
                     className={`${Dialog.display__flex} ${Dialog.hover__decor} ${Dialog.NavLinks__fontsDecor}`}>
                <div>
                    <img className={`${Friend.Friend__Ava} ${Dialog.display__AvaPosition}`} src={props.img}/>
                </div>
                <div className={Dialog.border__borderBottom}>
                    <p className={`${Dialog.text__NameFontsDecor}`}>{props.name}</p>
                    <div className={`${Dialog.display__flex}`}>
                        <img className={Dialog.lastImg__decor} src={props.lastImg} alt=""/>
                        <p className={`${Dialog.text__MessageFontsDecor}`}>{props.message}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default MiniDialogs

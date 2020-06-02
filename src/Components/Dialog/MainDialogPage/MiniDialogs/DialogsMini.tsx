import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import Dialog from "../../../../CssModules/Dialog/DialogFriend.module.css";
import Friend from "../../../../CssModules/Profile/FriendList/Friends.module.css";
import {ProfileType} from "../../../Common/types";

type mapStateToPropsType = {
    id: number
    name: string
    img: string
    newMess: number
    me: ProfileType
}

type mapDispatchType = {
    getDialogs: (id: number, me: ProfileType) => void
}

type PropsType = mapStateToPropsType & mapDispatchType

export const MiniDialogs:FC<PropsType> = (props) => {
    let get = () => {
        props.getDialogs(props.id, props.me)
    }

    return (
        <div className={`${props.newMess && Dialog.dialog_containerViewMessages}`} onClick={get}>
            <NavLink to={'/dialog/' + props.id}
                     className={`${Dialog.display__flex} ${Dialog.hover__decor} ${Dialog.NavLinks__fontsDecor}`}>
                <div>
                    <img className={`${Friend.Friend__Ava} ${Dialog.display__AvaPosition}`} src={props.img}/>
                </div>
                <div className={Dialog.border__borderBottom}>
                    <p className={`${Dialog.text__NameFontsDecor}`}>{props.name}</p>
                    <p className={`${Dialog.text__NameFontsDecor}`}>{props.newMess > 0 && ' +' + props.newMess}</p>
                </div>
            </NavLink>
        </div>
    )
}

export default MiniDialogs

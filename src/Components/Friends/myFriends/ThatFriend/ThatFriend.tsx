import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import Dialog from "../../../../CssModules/Dialog/DialogFriend.module.css";
import Friend from "../../../../CssModules/Profile/FriendList/Friends.module.css";

type mapStateToPropsType = {
    id: number
    name: string
    img: string
    isFetching: boolean
}

type mapDispatchType = {
    getProfileThunk: (id: number, who: string) => void
    setAnotherProfile: (id: number, who: string) => void
}

type PropsType = mapStateToPropsType & mapDispatchType

export const ThatFriend: FC<PropsType> = (props) => {
    let throwProfileInfo = (e: React.MouseEvent) => {
        if (props.isFetching) return e.preventDefault()
        props.setAnotherProfile(props.id, 'notMe')
    }
    return (
        <div>
            <NavLink onClick={throwProfileInfo} to={'/profile/' + props.id}
                     className={`${Dialog.display__flex} ${Dialog.hover__decor} ${Dialog.NavLinks__fontsDecor}`}>
                <div>
                    <img className={`${Friend.Friend__Ava} ${Dialog.display__AvaPosition}`} src={props.img} alt='Ava'/>
                </div>
                <div className={Dialog.border__borderBottom}>
                    <p className={`${Dialog.text__NameFontsDecor}`}>{`${props.name}`}</p>
                </div>
            </NavLink>
        </div>
    )
}

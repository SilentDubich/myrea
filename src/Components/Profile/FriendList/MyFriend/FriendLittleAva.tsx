import React, {FC} from "react";
import Friends from '../../../../CssModules/Profile/FriendList/Friends.module.css';
import {NavLink} from "react-router-dom";


type MapStatePropsType = {
    myId: number
    id: number
    name: string
    img: string
    setAnotherProfile: (id: number, who: string) => void
}

export const MyFriend:FC<MapStatePropsType> = (props) => {
    let setProfile = () => {
        let meOrNot = props.id === props.myId ? 'me' : 'notMe'
        props.setAnotherProfile(props.id, meOrNot)
    }
    return (
        <div>
            <NavLink onClick={setProfile} to={`/profile/${props.id}`}>
                <div>
                    <img className={`${Friends.margin} ${Friends.Friend__Ava}`} src={props.img}/>
                </div>
            </NavLink>
            <p className={Friends.Friend__Font}>{props.name}</p>
        </div>
    )
}
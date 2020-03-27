import React from "react";
import Pendalf from '../../../../img/Avatars/pendalf.jpg'
import Friends from '../../../../CssModules/Profile/FriendList/Friends.module.css';
function MyFriend(props) {
    return (
        <div>
            <img className={Friends.Friend__Ava} src={props.img}/>
            <p className={Friends.Friend__Font}>{props.name}</p>
        </div>
    )
}

export default MyFriend
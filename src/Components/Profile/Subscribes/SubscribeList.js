import React from "react";
import Content from "../../../CssModules/content.module.css";
import Friends from "../../../CssModules/Profile/FriendList/Friends.module.css";
import Subscribe from '../../../CssModules/Profile/Subscribe/Subscribe.module.css'
import MyFriend from "../FriendList/MyFriend/FriendLittleAva";
import Groups from "./Groups/SubscribeGroups";
import Mordovia from '../../../img/Avatars/mordovia.jpg'
import Ali from '../../../img/Avatars/ali.png'
import Staff from '../../../img/Avatars/cat.jpeg'

function Subscribes(props) {
    // let allSubs = props.subscribes.map( sub => <Groups GroupName={sub.Name} Picture={sub.Avatar}/>);
    // let allSubs = props.state.Profile.Subscribes.map( sub => <Groups GroupName={sub.Name} Picture={sub.Avatar}/>);
    let allSubs = props.state.subscribesReducer.map( sub => <Groups GroupName={sub.Name} Picture={sub.Avatar}/>);
    return(
        <div className={`${Content.content__menu_decorationBlocks}`}>
            <p className={Subscribe.font__size}>My subscribes: <span>{allSubs.length}</span></p>
            <div className={Subscribe.display__grid}>
                {allSubs}
            </div>
        </div>
    )
}

export default Subscribes
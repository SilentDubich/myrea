import React from "react";
import Content from "../../../CssModules/content.module.css";
import Friends from '../../../CssModules/Profile/FriendList/Friends.module.css';
import MyFriend from "./MyFriend/FriendLittleAva";


function FriendList(props) {
    let allFriends = () => {
        let all = [];
        let array = props.friends;
        let shuffledArray = array.sort(() => Math.random() - 0.5);
        for (let i = 0; i < Math.min(array.length, 6); i++){
            all.push(array[i])
        }
        return all.map(friend => <MyFriend myId={props.myId} setAnotherProfile={props.setAnotherProfile} id={friend.id} key={friend.id} name={friend.name} img={friend.avatar}/>)
    };
    return(
        <div className={`${Content.content__menu_decorationBlocks}`}>
            <p className={Friends.font__size}>My friends: <span>{props.friends.length}</span></p>
            <div className={Friends.display__grid}>
                {allFriends()}
            </div>
        </div>
    )
}

export default FriendList

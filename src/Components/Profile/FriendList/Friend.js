import React from "react";
import Content from "../../../CssModules/content.module.css";
import Friends from '../../../CssModules/Profile/FriendList/Friends.module.css';
import MyFriend from "./MyFriend/FriendLittleAva";


function FriendList(props) {
    debugger
    // let allFriends = props.state.Profile.Friends.map( friend => <MyFriend name={friend.Name} img={friend.Avatar}/>);
    // let allFriends = props.state.friendsReducer.map( friend => <MyFriend name={friend.Name} img={friend.Avatar}/>);
    let allFriends = () => {
        let all = [];
        let array = props.state.friendsReducer;
        let shuffledArray = array.sort(() => Math.random() - 0.5);
        for (let i = 0; i < Math.min(array.length, 6); i++){
            all.push(shuffledArray[i])
        }
        return all.map(friend => <MyFriend name={friend.Name} img={friend.Avatar}/>)
    };
    return(
        <div className={`${Content.content__menu_decorationBlocks}`}>
            <p className={Friends.font__size}>My friends: <span>{props.state.friendsReducer.length}</span></p>
            <div className={Friends.display__grid}>
                {allFriends()}
            </div>
        </div>
    )
}

export default FriendList
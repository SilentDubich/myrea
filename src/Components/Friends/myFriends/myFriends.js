import React from "react";
import FriendsSearch from './FriendsSearch'
import Content from '../../../CssModules/content.module.css'
import ThatFriend from './ThatFriend/ThatFriend'
import AllFriends from "./ThatFriend/AllFriends";
import {AllFriendsContainer} from "./ThatFriend/AllFriendsContainer";

function MyFriends(props) {
    return (
        <div className={Content.content__menu_decorationBlocks}>
            <FriendsSearch/>
            <p>Friends:<span>{props.state.friendsReducer.length}</span></p>
            <AllFriendsContainer/>
            {/*<ThatFriend/>*/}
        </div>
    )
}

export default MyFriends

import React from "react";
import FriendsSearch from './FriendsSearch'
import Content from '../../../CssModules/content.module.css'
import {AllFriendsContainer} from "./ThatFriend/AllFriendsContainer";

function MyFriends(props) {
    return (
        <div className={Content.content__menu_decorationBlocks}>
            <FriendsSearch/>
            <AllFriendsContainer/>
        </div>
    )
}

export default MyFriends

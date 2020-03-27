import React from "react";
import {connect} from "react-redux";
import AllFriends from "./AllFriends";

let mapStateToProps = state => {
    return {
        Friends: state.friendsReducer
    }
};

export const AllFriendsContainer = connect(mapStateToProps)(AllFriends);
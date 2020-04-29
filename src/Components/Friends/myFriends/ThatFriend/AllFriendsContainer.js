import React from "react";
import {connect} from "react-redux";
import AllFriends from "./AllFriends";
import {getProfileThunk} from "../../../DataBases/Reducers/ProfileInfoReducer";

let mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends
    }
};

export const AllFriendsContainer = connect(mapStateToProps, {getProfileThunk})(AllFriends);

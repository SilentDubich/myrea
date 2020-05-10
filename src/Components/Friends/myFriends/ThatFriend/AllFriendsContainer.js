import React from "react";
import {connect} from "react-redux";
import AllFriends from "./AllFriends";
import {getProfileThunk, setAnotherProfile} from "../../../DataBases/Reducers/ProfileInfoReducer";

let mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends,
        tempSearch: state.friendsReducer.tempSearch
    }
};

export const AllFriendsContainer = connect(mapStateToProps, {getProfileThunk, setAnotherProfile})(AllFriends);

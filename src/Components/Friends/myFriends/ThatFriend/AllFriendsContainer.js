import React from "react";
import {connect} from "react-redux";
import AllFriends from "./AllFriends";
import {getProfileThunk} from "../../../DataBases/Reducers/ProfileInfoReducer";

let mapStateToProps = state => {
    return {
        Friends: state.friendsReducer
    }
};

export const AllFriendsContainer = connect(mapStateToProps, {getProfileThunk})(AllFriends);

import React from "react";
import {connect} from "react-redux";
import {AllFriends} from "./AllFriends";
import {getProfileThunk, setAnotherProfile} from "../../../DataBases/Reducers/ProfileInfoReducer";
import {AppStateType} from "../../../DataBases/Redux/Store";

let mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.friendsReducer.friends,
        tempSearch: state.friendsReducer.tempSearch,
        isFetching: state.usersReducer.isFetching
    }
};

export const AllFriendsContainer = connect(mapStateToProps, {getProfileThunk, setAnotherProfile})(AllFriends);

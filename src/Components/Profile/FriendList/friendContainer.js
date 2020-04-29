import React from "react";
import {connect} from "react-redux";
import {setAnotherProfile} from "../../DataBases/Reducers/ProfileInfoReducer";
import FriendList from "./Friend";



let mapStateToProps = state => {
    return {
        friends: state.friendsReducer.friends,
        myId: state.profileInfoReducer.currentProfile.userId
    }
}


export const FriendListContainer = connect(mapStateToProps, {setAnotherProfile})(FriendList)

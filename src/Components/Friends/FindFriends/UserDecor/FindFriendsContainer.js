import React from "react";
import {connect} from "react-redux";
import {postCreation, updatePostTextCreation} from "../../../DataBases/Reducers/PostsReducer";
import Users from "./findFriends";
import {addFriendCreation, deleteFriendCreation} from "../../../DataBases/Reducers/FriendsReducer";



let mapStateToProps = (state) => {
    // debugger
    return{
        users: state.usersReducer,
        friend: state.friendsReducer,
    }
};

let mapDispatchToProps = dispatch => {
    return{
        // addFriend: text => {
        //     dispatch(addFriendCreation())
        // },
        // deleteFriend: () => {
        //     dispatch(deleteFriendCreation())
        // }
    }
};



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer

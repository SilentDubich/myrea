import React from "react";
import {connect} from "react-redux";
import {postCreation, updatePostTextCreation} from "../../../DataBases/Reducers/PostsReducer";
import Users from "./findFriends";
import {addFriendCreation, deleteFriendCreation} from "../../../DataBases/Reducers/FriendsReducer";
import {getProfile, setProfile} from "../../../DataBases/Reducers/ProfileInfoReducer";



let mapStateToProps = (state) => {
    // debugger
    return{
        users: state.usersReducer,
    }
};




const UsersContainer = connect(mapStateToProps, {getProfile, setProfile})(Users);

export default UsersContainer

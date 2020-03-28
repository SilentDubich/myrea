import React from "react";
import {connect} from "react-redux";
import Users from "./findFriends";
import {getProfile, getProfileThunk, setProfile} from "../../../DataBases/Reducers/ProfileInfoReducer";



let mapStateToProps = (state) => {
    // debugger
    return{
        users: state.usersReducer,
    }
};




const UsersContainer = connect(mapStateToProps, {getProfile, setProfile, getProfileThunk})(Users);

export default UsersContainer

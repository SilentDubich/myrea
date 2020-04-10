import React from "react";
import {connect} from "react-redux";
import Users from "./findFriends";
import {
    getProfile,
    getProfileThunk,
    setAnotherProfile,
    setProfile
} from "../../../DataBases/Reducers/ProfileInfoReducer";



let mapStateToProps = (state) => {
    // debugger
    return{
        users: state.usersReducer,
        isFetching: state.usersReducer.isFetching
    }
};




const UsersContainer = connect(mapStateToProps, {getProfile, setProfile, getProfileThunk, setAnotherProfile})(Users);

export default UsersContainer

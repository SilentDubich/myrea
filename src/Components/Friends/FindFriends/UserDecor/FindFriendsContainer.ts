import React from "react";
import {connect} from "react-redux";
import {Users} from "./findFriends";
import {
    getProfileThunk,
    setAnotherProfile,
    actionsProfile
} from "../../../DataBases/Reducers/ProfileInfoReducer";
import {AppStateType} from "../../../DataBases/Redux/Store";



let mapStateToProps = (state: AppStateType) => {
    return{
        isFetching: state.usersReducer.isFetching
    }
};

const getProfile = actionsProfile.getProfile
const setProfile = actionsProfile.setProfile


const UsersContainer = connect(mapStateToProps, {getProfile, setProfile, getProfileThunk, setAnotherProfile})(Users);

export default UsersContainer

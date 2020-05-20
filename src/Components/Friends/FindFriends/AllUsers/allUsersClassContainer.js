import React from "react";
import {connect} from "react-redux";
import AllUsersClass from "./allUsersClass";
import {
    actionsUser,
    getUsersThunk,
} from "../../../DataBases/Reducers/UserReducer";


const setTotalUsers = actionsUser.setTotalUsers
const setUsers = actionsUser.setUsers
const switchIsButton = actionsUser.switchIsButton
const switchIsFetching = actionsUser.switchIsFetching
const updateSearchText = actionsUser.updateSearchText


let mapStateToProps = (state) => {
    return {
        state: state.usersReducer,
        tempSearch: state.usersReducer.tempSearch
    }
};



export const AllUsersClassContainer = connect(mapStateToProps,
    {setUsers, setTotalUsers, switchIsButton, switchIsFetching, getUsersThunk, updateSearchText})
(AllUsersClass);


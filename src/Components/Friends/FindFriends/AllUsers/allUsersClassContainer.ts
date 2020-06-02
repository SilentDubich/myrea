import React from "react";
import {connect} from "react-redux";
import {AllUsersClass} from "./allUsersClass";
import {
    actionsUser,
    getUsersThunk,
} from "../../../DataBases/Reducers/UserReducer";
import {AppStateType} from "../../../DataBases/Redux/Store";


// const setTotalUsers = actionsUser.setTotalUsers
// const setUsers = actionsUser.setUsers
// const switchIsButton = actionsUser.switchIsButton
// const switchIsFetching = actionsUser.switchIsFetching
const updateSearchText = actionsUser.updateSearchText


let mapStateToProps = (state: AppStateType) => {
    return {
        stateUsers: state.usersReducer,
        tempSearch: state.usersReducer.tempSearch
    }
};



export const AllUsersClassContainer = connect(mapStateToProps,
    {getUsersThunk, updateSearchText})
(AllUsersClass);


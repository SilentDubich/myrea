import React from "react";
import {connect} from "react-redux";
import AllUsersClass from "./allUsersClass";
import {
    getUsersThunk,
    setTotalUsers,
    setUsers,
    switchIsButton,
    switchIsFetching,
    updateSearchText,
} from "../../../DataBases/Reducers/UserReducer";


let mapStateToProps = (state) => {
    return {
        state: state.usersReducer,
        tempSearch: state.usersReducer.tempSearch
    }
};



export const AllUsersClassContainer = connect(mapStateToProps,
    {setUsers, setTotalUsers, switchIsButton, switchIsFetching, getUsersThunk, updateSearchText})
(AllUsersClass);


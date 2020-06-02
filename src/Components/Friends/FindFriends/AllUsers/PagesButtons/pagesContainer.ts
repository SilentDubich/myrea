import React from "react";
import {connect} from "react-redux";
import {Pages} from "./pages";
import {
    actionsUser, getUsersThunk
} from "../../../../DataBases/Reducers/UserReducer";
import {AppStateType} from "../../../../DataBases/Redux/Store";

const setPage = actionsUser.setPage
const setTotalUsers = actionsUser.setTotalUsers
const setUsers = actionsUser.setUsers
const switchIsButton = actionsUser.switchIsButton
const switchIsFetching = actionsUser.switchIsFetching





let mapStateToProps = (state: AppStateType) => {
    return {
        currentPage: state.usersReducer.currentPage,
        totalUsers: state.usersReducer.totalUsers,
        pageSize: state.usersReducer.pageSize,
        isFetching: state.usersReducer.isFetching,
        pageButton: state.usersReducer.pageButton,
        portionSize: 15
    }
};


export const PagesContainer = connect(mapStateToProps, {setPage, getUsersThunk})(Pages);

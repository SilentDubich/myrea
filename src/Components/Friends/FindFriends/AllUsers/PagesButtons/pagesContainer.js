import React from "react";
import {connect} from "react-redux";
import Pages from "./pages";
import {
    actionsUser
} from "../../../../DataBases/Reducers/UserReducer";

const setPage = actionsUser.setPage
const setTotalUsers = actionsUser.setTotalUsers
const setUsers = actionsUser.setUsers
const switchIsButton = actionsUser.switchIsButton
const switchIsFetching = actionsUser.switchIsFetching





let mapStateToProps = state => {
    return {
        currentPage: state.usersReducer.currentPage,
        pageCounts: state.usersReducer.pageCounts,
        totalUsers: state.usersReducer.totalUsers,
        pageSize: state.usersReducer.pageSize,
        isFetching: state.usersReducer.isFetching,
        pageButton: state.usersReducer.pageButton,
        portionSize: 15
    }
};


export const PagesContainer = connect(mapStateToProps, {setPage, setUsers, switchIsButton, switchIsFetching})(Pages);

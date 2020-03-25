import React from "react";
import {connect} from "react-redux";
import Pages from "./pages";
import {
    setPage,
    setTotalUsers,
    setUsers,
    switchIsButton,
    switchIsFetching
} from "../../../../DataBases/Reducers/UserReducer";



let mapStateToProps = state => {
    return {
        currentPage: state.usersReducer.currentPage,
        pageCounts: state.usersReducer.pageCounts,
        totalUsers: state.usersReducer.totalUsers,
        pageSize: state.usersReducer.pageSize,
        isFetching: state.usersReducer.isFetching,
        button: state.usersReducer.button
    }
};

// let mapDispatchToProps = dispatch => {
//     return {
//         setPage: page =>  {
//             dispatch(setPageCreation(page))
//         },
//         setUsers: users => {
//             dispatch(setUsers(users))
//         },
//         switchFetching: bool => {
//             dispatch(switchIsFetchingCreation(bool))
//         },
//         switchButton: bool => {
//             dispatch(switchIsButtonCreation(bool))
//         }
//     }
// };

export const PagesContainer = connect(mapStateToProps, {setPage, setUsers, switchIsButton, switchIsFetching})(Pages);

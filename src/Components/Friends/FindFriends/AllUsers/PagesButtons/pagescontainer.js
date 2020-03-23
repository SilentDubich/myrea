import React from "react";
import {connect} from "react-redux";
import Pages from "./pages";
import {setPageCreation} from "../../../../DataBases/Reducers/UserReducer";



let mapStateToProps = state => {
    return {
        currentPage: state.usersReducer.currentPage,
        pageCounts: state.usersReducer.pageCounts,
        totalUsers: state.usersReducer.totalUsers,
        pageSize: state.usersReducer.pageSize
    }
};

let mapDispatchToProps = dispatch => {
    return {
        setPage: page =>  {
            dispatch(setPageCreation(page))
        }

    }
};

export const PagesContainer = connect(mapStateToProps, mapDispatchToProps)(Pages);

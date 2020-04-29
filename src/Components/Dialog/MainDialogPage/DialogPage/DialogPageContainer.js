import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile, postProfilePhotoThunk, setAnotherProfile} from "../../../DataBases/Reducers/ProfileInfoReducer";
import {deleteMessageThunk, putNewDialogThunk} from "../../../DataBases/Reducers/MessagesReducer";
import {authRedirect} from "../../../Common/redirectToLogin";
import DialogPage from "./DialogPage";
import {withRouter} from "react-router-dom";


let mapStateToProps = state => {
    return {
        state,
        isFetching: state.usersReducer.isFetching,
        myId: state.profileInfoReducer.logged.userId
    }
}


export const DialogPageContainer =
    compose
    (
        connect(mapStateToProps, {getProfile, postProfilePhotoThunk, putNewDialogThunk, deleteMessageThunk, setAnotherProfile}),
        withRouter,
        authRedirect
    )(DialogPage)

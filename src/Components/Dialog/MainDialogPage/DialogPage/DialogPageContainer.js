import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getProfile,
    getProfileThunk,
    postProfilePhotoThunk,
    setAnotherProfile
} from "../../../DataBases/Reducers/ProfileInfoReducer";
import {deleteMessageThunk, putNewDialogThunk} from "../../../DataBases/Reducers/MessagesReducer";
import {authRedirect} from "../../../Common/redirectToLogin";
import ProfileCenterInfoClass from "../../../Profile/MainProfilePage/ProfileCenterInfoClass";
import DialogPage from "./DialogPage";
import {withRouter} from "react-router-dom";
import {API} from "../../../DataBases/API/API";



let mapStateToProps = state => {
    return {
        state,
        isFetching: state.usersReducer.isFetching,
        myId: state.profileInfoReducer.logged.id
    }
}
// API.getDialog(2)
//     .then(response => {
//         debugger
//         return response
//     })

export const DialogPageContainer =
    compose
    (
        connect(mapStateToProps, {getProfile, postProfilePhotoThunk, putNewDialogThunk, deleteMessageThunk, setAnotherProfile}),
        withRouter,
        authRedirect
    )(DialogPage)

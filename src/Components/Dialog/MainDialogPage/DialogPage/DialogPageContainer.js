import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile, postProfilePhotoThunk} from "../../../DataBases/Reducers/ProfileInfoReducer";
import {putNewDialogThunk} from "../../../DataBases/Reducers/MessagesReducer";
import {authRedirect} from "../../../redirect";
import ProfileCenterInfoClass from "../../../Profile/MainProfilePage/ProfileCenterInfoClass";
import DialogPage from "./DialogPage";
import {withRouter} from "react-router-dom";
import {API} from "../../../DataBases/API/API";



let mapStateToProps = state => {
    return {
        state,
        isFetching: state.usersReducer.isFetching
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
        connect(mapStateToProps, {getProfile, postProfilePhotoThunk, putNewDialogThunk}),
        withRouter,
        authRedirect
    )(DialogPage)

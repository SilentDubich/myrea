import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {actionsProfile, postProfilePhotoThunk, setAnotherProfile} from "../../../DataBases/Reducers/ProfileInfoReducer";
import {
    deleteMessageThunk,
    getUserAllMessagesThunk,
    putNewDialogThunk
} from "../../../DataBases/Reducers/MessagesReducer";
import {authRedirect} from "../../../Common/redirectToLogin";
import {DialogPage} from "./DialogPage";
import {withRouter} from "react-router-dom";
import {AppStateType} from "../../../DataBases/Redux/Store";


let mapStateToProps = (state: AppStateType) => {
    return {
        isFetching: state.usersReducer.isFetching,
        myId: state.profileInfoReducer.logged.userId,
        myProfile: state.profileInfoReducer.logged,
        dialogs: state.messageReducer.Dialogs
    }
}


export const DialogPageContainer =
    compose
    (
        connect(mapStateToProps,
            {deleteMessageThunk, setAnotherProfile,getUserAllMessagesThunk}),
        withRouter,
        authRedirect
    )(DialogPage)

import React from "react";
import {connect} from "react-redux";
import DialogLists from "./DialogList";
import {
    getProfile,
    postProfilePhotoThunk,
    updatePhotoSize,
    uploadPhoto
} from "../../DataBases/Reducers/ProfileInfoReducer";
import {getUserAllMessagesThunk, putNewDialogThunk} from "../../DataBases/Reducers/MessagesReducer";
import {authRedirect} from "../../Common/redirectToLogin";
import {compose} from "redux";
import ProfileCenterInfoClass from "../../Profile/MainProfilePage/ProfileCenterInfoClass";





let mapStateToProps = state => {
    return {
        dialogs: state.messageReducer.Dialogs,
        me: state.profileInfoReducer.logged,
        tempSearch: state.messageReducer.tempSearch


    }
}

// let mapDispatchToProps = dispatch => {
//     return {
//         getMessages: id => {
//             dispatch(getUserAllMessagesThunk(id))
//         }
//
//     }
// }

// authRedirect()
// export const DialogsListContainer = connect(mapStateToProps, {getUserAllMessagesThunk})(DialogLists)


export const DialogsListContainer = compose(
    connect(mapStateToProps, {getUserAllMessagesThunk}),
    authRedirect
)(DialogLists)

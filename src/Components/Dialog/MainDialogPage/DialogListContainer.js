import React from "react";
import {connect} from "react-redux";
import DialogLists from "./DialogList";
import {getProfile} from "../../DataBases/Reducers/ProfileInfoReducer";
import {getUserAllMessagesThunk} from "../../DataBases/Reducers/MessagesReducer";





let mapStateToProps = state => {
    return {
        dialogs: state.messageReducer.Dialogs,
        me: state.profileInfoReducer.logged

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


export const DialogsListContainer = connect(mapStateToProps, {getUserAllMessagesThunk})(DialogLists)

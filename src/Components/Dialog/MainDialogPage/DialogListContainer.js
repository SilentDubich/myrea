import React from "react";
import {connect} from "react-redux";
import DialogLists from "./DialogList";
import {getUserAllMessagesThunk} from "../../DataBases/Reducers/MessagesReducer";
import {authRedirect} from "../../Common/redirectToLogin";
import {compose} from "redux";


let mapStateToProps = state => {
    return {
        dialogs: state.messageReducer.Dialogs,
        me: state.profileInfoReducer.logged,
        tempSearch: state.messageReducer.tempSearch
    }
}


export const DialogsListContainer = compose(
    connect(mapStateToProps, {getUserAllMessagesThunk}),
    authRedirect
)(DialogLists)

import React from "react";
import {connect} from "react-redux";
import DialogLists from "./DialogList";





let mapStateToProps = state => {
    return {
        dialogs: state.messageReducer.Dialogs
    }
}


export const DialogsListContainer = connect(mapStateToProps, {})(DialogLists)

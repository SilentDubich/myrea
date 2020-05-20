import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {actionsMessages} from "../../DataBases/Reducers/MessagesReducer";


let mapStateToProps = state => {
    return {
        tempSearch: state.messageReducer.tempSearch
    }
}

const updateSearchText = actionsMessages.updateSearchText

export const DialogContainer = connect(mapStateToProps, {updateSearchText})(Dialogs)

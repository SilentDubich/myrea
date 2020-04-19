import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {updateSearchText} from "../../DataBases/Reducers/MessagesReducer";


let mapStateToProps = state => {
    return {
    }
}


export const DialogContainer = connect(mapStateToProps, {updateSearchText})(Dialogs)

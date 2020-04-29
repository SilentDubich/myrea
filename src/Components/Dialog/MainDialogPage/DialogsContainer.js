import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {updateSearchText} from "../../DataBases/Reducers/MessagesReducer";




export const DialogContainer = connect(null, {updateSearchText})(Dialogs)

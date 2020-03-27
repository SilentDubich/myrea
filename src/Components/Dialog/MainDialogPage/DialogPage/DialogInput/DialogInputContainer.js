import React from "react";
import Person from "../../../../../CssModules/Dialog/PersonDialog.module.css";
import {messageCreation, updateMessageCreation} from "../../../../DataBases/Reducers/MessagesReducer";
import Input from "./DialogInput";
import StoreContext from "../../../../StoreContext";
import {connect} from "react-redux";




let mapStateToProps = state  => {
    let loc = window.location.href;
    let dialogId = Number(loc.charAt(loc.length - 1));
    return {
        Temp: state.messageReducer.Dialogs[dialogId].Temp
    }
};

let mapDispatchToProps = dispatch => {
    let loc = window.location.href;
    let dialogId = Number(loc.charAt(loc.length - 1));
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let time = `${hour}:${minute}:${second}`;
    return {
        currentText: text => {
            dispatch(updateMessageCreation(text, dialogId));
        },
        submit: () => {
            dispatch(messageCreation(time, dialogId))
        }
    }
};

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer

import React from "react";
import Person from "../../../../../CssModules/Dialog/PersonDialog.module.css";
import {messageCreation, postMessageThunk, updateMessageCreation} from "../../../../DataBases/Reducers/MessagesReducer";
import Input from "./DialogInput";
import StoreContext from "../../../../StoreContext";
import {connect} from "react-redux";




let mapStateToProps = (state, props)  => {
    let dialogId = props.loc;
    let index;
    // refactor
    for (let i = 0; i < state.messageReducer.Dialogs.length; i++){
        if (dialogId === state.messageReducer.Dialogs[i].id){
            index = i
        }
    }
    // debugger
    return {
        Temp: state.messageReducer.Dialogs[index].Temp,
        id: dialogId,
        index,
        me: state.profileInfoReducer.logged

    }
};

let mapDispatchToProps = (dispatch, props) => {
    let dialogId = props.loc;
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let time = `${hour}:${minute}:${second}`;
    return {
        currentText: (text, id) => {
            dispatch(updateMessageCreation(text, id));
        },
        submit: () => {
            dispatch(messageCreation(time, dialogId))
        },
        postMessageThunk: (id, message) => {
            dispatch(postMessageThunk(id, message))
        }
    }
    // debugger
};

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer

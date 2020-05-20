import React from "react";
import {actionsMessages, postMessageThunk} from "../../../../DataBases/Reducers/MessagesReducer";
import Input from "./DialogInput";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";


let mapStateToProps = (state, props)  => {
    let dialogId = props.loc;
    let index;
    for (let i = 0; i < state.messageReducer.Dialogs.length; i++){
        if (dialogId === state.messageReducer.Dialogs[i].id){
            index = i
        }
    }
    return {
        Temp: state.messageReducer.Dialogs[index].Temp,
        id: dialogId,
        index,
        me: state.profileInfoReducer.logged

    }
};

const updateMessageCreation = actionsMessages.updateMessageCreation

let mapDispatchToProps = dispatch => {
    return {
        currentText: (text, id) => {
            dispatch(updateMessageCreation(text, id));
        },
        postMessageThunk: (id, message, me) => {
            dispatch(postMessageThunk(id, message, me))
        }
    }
};

const InputContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Input);


export default InputContainer

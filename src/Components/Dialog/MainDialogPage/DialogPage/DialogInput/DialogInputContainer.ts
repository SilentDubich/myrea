import React from "react";
import {actionsMessages, postMessageThunk} from "../../../../DataBases/Reducers/MessagesReducer";
import {Input} from "./DialogInput";
import {connect} from "react-redux";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {AppStateType} from "../../../../DataBases/Redux/Store";

type mapPropsType = {
    loc: number
}


let mapStateToProps = (state: AppStateType, props: mapPropsType)  => {
    let dialogId: number = props.loc;
    let index = 0;
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


const InputContainer = compose(
    connect(mapStateToProps, {updateMessageCreation, postMessageThunk}),
)(Input);


export default InputContainer

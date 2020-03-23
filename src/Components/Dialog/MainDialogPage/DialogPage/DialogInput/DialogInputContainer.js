import React from "react";
import Person from "../../../../../CssModules/Dialog/PersonDialog.module.css";
import {messageCreation, updateMessageCreation} from "../../../../DataBases/Reducers/MessagesReducer";
import Input from "./DialogInput";
import StoreContext from "../../../../StoreContext";
import {connect} from "react-redux";

// function InputContainer(props) {
//     // let loc = window.location.href;
//     // let dialogId = Number(loc.charAt(loc.length - 1));
//     // let Temp = props.state.messageReducer.Dialogs[dialogId].Temp;
//     // let date = new Date();
//     // let hour = date.getHours();
//     // let minute = date.getMinutes();
//     // let second = date.getSeconds();
//     // let time = `${hour}:${minute}:${second}`;
//     // let submit = () => {
//     //     props.dispatch(messageCreation(time, dialogId))
//     // };
//     //
//     // let currentText = text => {
//     //     // let text = ref.current.value;
//     //     props.dispatch(updateMessageCreation(text, dialogId))
//     // };
//
//     // debugger
//     return (
//
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     let state = store.getState();
//                     let loc = window.location.href;
//                     let dialogId = Number(loc.charAt(loc.length - 1));
//                     let Temp = state.messageReducer.Dialogs[dialogId].Temp;
//                     let date = new Date();
//                     let hour = date.getHours();
//                     let minute = date.getMinutes();
//                     let second = date.getSeconds();
//                     let time = `${hour}:${minute}:${second}`;
//                     let submit = () => {
//                         store.dispatch(messageCreation(time, dialogId))
//                     };
//                     let currentText = text => {
//                         // let text = ref.current.value;
//                         store.dispatch(updateMessageCreation(text, dialogId));
//                     };
//                     return <Input updateMessage={currentText} sendMessage={submit} Temp={Temp}/>
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// }



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
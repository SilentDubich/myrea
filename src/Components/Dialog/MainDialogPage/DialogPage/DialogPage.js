import React from "react";
import Content from '../../../../CssModules/content.module.css';
import Person from '../../../../CssModules/Dialog/PersonDialog.module.css'
import Message from "./DialogMessage";
import Input from "./DialogInput/DialogInput";
import Upper from "./DialogUpper";
import Text from "../../../mainText";
import InputContainer from "./DialogInput/DialogInputContainer";

function DialogPage(props) {
    debugger
    let loc = window.location.href;
    let dialogId = Number(loc.charAt(loc.length - 1));
    let allDialog = props.state.messageReducer.Dialogs[dialogId].Messages
        .map( (mes) => <Message
            dispatch={props.dispatch}
            dialogs={props.state.messageReducer.Dialogs[dialogId]}
            id={props.state.messageReducer.Dialogs[dialogId].id}
            mesId={mes.id}
            avatars={mes.Avatar}
            message={mes.Message}
            who={mes.Who}
            date={mes.Data}
        /> );
    // debugger
    return(
        <div>
            <div className={`${Content.content__menu_decorationBlocks} ${Person.paddingOff}`}>
                <Upper id={dialogId}
                       dispatch={props.dispatch}
                       state={props.state}
                />
                <div className={`${Person.container}`}>
                    {allDialog}
                </div>
                <InputContainer/>
            </div>
        </div>
    )
}

export default DialogPage
import React, {useEffect} from "react";
import Content from '../../../../CssModules/content.module.css';
import Person from '../../../../CssModules/Dialog/PersonDialog.module.css'
import Message from "./DialogMessage";
import Upper from "./DialogUpper";
import InputContainer from "./DialogInput/DialogInputContainer";
import Preloader from "../../../Common/Preloader";

function DialogPage(props) {
    let loc = Number(props.match.params.userID);
    useEffect(() => {
        props.getUserAllMessagesThunk(loc, props.state.profileInfoReducer.logged)
    }, [props.state.messageReducer.Dialogs.length === 0])
    let currentMessages = [];
    let index = 0;
    for (let i = 0; i < props.state.messageReducer.Dialogs.length; i++){
        if (loc === props.state.messageReducer.Dialogs[i].id){
            currentMessages = props.state.messageReducer.Dialogs[i].Messages
            index = i
        }
    }
    let allDialog = currentMessages.map( mes => <Message
        key={mes.id}
        id={props.state.messageReducer.Dialogs[index].id}
        mesId={mes.id}
        viewed={mes.viewed}
        senderId={mes.senderId}
        avatars={mes.Avatar}
        message={mes.body}
        who={mes.senderName}
        date={mes.addedAt}
        deleteMessage={props.deleteMessageThunk}
        setAnotherProfile={props.setAnotherProfile}
        myId={props.myId}
    />)

    if(props.isFetching) return <Preloader/>
    return(
        <div>
            <div className={`${Content.content__menu_decorationBlocks} ${Person.paddingOff}`}>
                <Upper id={index}
                       state={props.state}
                />
                <div className={`${Person.container}`}>
                    {allDialog}
                </div>
                <InputContainer loc={loc}/>
            </div>
        </div>
    )
}

export default DialogPage

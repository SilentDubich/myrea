import React, {FC, useEffect} from "react";
import Content from '../../../../CssModules/content.module.css';
import Person from '../../../../CssModules/Dialog/PersonDialog.module.css'
import {Message} from "./DialogMessage";
import {Upper} from "./DialogUpper";
import InputContainer from "./DialogInput/DialogInputContainer";
import Preloader from "../../../Common/Preloader";
import {DialogType, MessageType, ProfileType} from "../../../Common/types";
import { RouteComponentProps } from "react-router-dom";


type mapStateToPropsType = {
    isFetching: boolean
    myId: number
    myProfile: ProfileType
    dialogs: Array<DialogType>
}

type mapDispatchType = {
    getUserAllMessagesThunk: (loc: number, myProfile: ProfileType) => void
    deleteMessageThunk: (mesId: number, id: number) => void
    setAnotherProfile: (id: number, who: string) => void
}

type PropsType = mapStateToPropsType & RouteComponentProps<{userID: string}> & mapDispatchType

export const DialogPage:FC<PropsType> = (props) => {
    let loc = Number(props.match.params.userID);
    useEffect(() => {
        props.getUserAllMessagesThunk(loc, props.myProfile)
    }, [props.dialogs.length === 0])
    let currentMessages: Array<MessageType> = [];
    let index = 0;
    for (let i = 0; i < props.dialogs.length; i++){
        if (loc === props.dialogs[i].id){
            currentMessages = props.dialogs[i].Messages
            index = i
        }
    }
    let allDialog = currentMessages.map( mes => <Message
        key={mes.id}
        id={props.dialogs[index].id}
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
                       dialogs={props.dialogs}
                />
                <div className={`${Person.container}`}>
                    {allDialog}
                </div>
                <InputContainer loc={loc}/>
            </div>
        </div>
    )
}

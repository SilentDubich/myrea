import React, {useEffect} from "react";
import MiniDialogs from "./MiniDialogs/DialogsMini";
import NoResultSearch from "../../Common/NoResultSearch";


function DialogLists(props) {
    debugger
    let dialogsData
    let pattern = new RegExp(props.tempSearch, ['giy'] );
    dialogsData = props.dialogs
        .map( dialog => {
            if (props.tempSearch.length === 0 || dialog.Name.match(pattern)) {
                return <MiniDialogs
                    key={dialog.id}
                    name={dialog.Name}
                    img={dialog.Avatar}
                    id={dialog.id}
                    newMess={dialog.newMessages}
                    // message={dialog.Messages[dialog.Messages.length - 1].Message}
                    // lastImg={dialog.Messages[dialog.Messages.length - 1].Avatar}
                    getDialogs={props.getUserAllMessagesThunk}
                    me={props.me}
                />
            } else {
                return null
            }
                }
            );
    for (let i = 0; i < dialogsData.length; i++){
        if (dialogsData[i] !== null){
            return (
                <div>{dialogsData}</div>
            )
        }
    }
    return <NoResultSearch/>
}

export default DialogLists

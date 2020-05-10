import React from "react";
import MiniDialogs from "./MiniDialogs/DialogsMini";
import NoResultSearch from "../../Common/NoResultSearch";


function DialogLists(props) {
    let dialogsData
    let pattern = new RegExp(props.tempSearch, ['giy']);
    dialogsData = props.dialogs
        .map(dialog => {
                if (props.tempSearch.length === 0 || dialog.userName.match(pattern)) {
                    return <MiniDialogs
                        key={dialog.id}
                        id={dialog.id}
                        name={dialog.userName}
                        img={dialog.photos.large}
                        newMess={dialog.newMessagesCount}
                        getDialogs={props.getUserAllMessagesThunk}
                        me={props.me}
                    />
                }
            }
        );
    for (let i = 0; i < dialogsData.length; i++) {
        if (dialogsData[i]) return (<div>{dialogsData}</div>)
    }
    return (
        <div>
            <NoResultSearch/>
        </div>
    )
}

export default DialogLists

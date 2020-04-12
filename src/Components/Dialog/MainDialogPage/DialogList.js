import React from "react";
import MiniDialogs from "./MiniDialogs/DialogsMini";


function DialogLists(props) {
    // debugger
    // let loc = window.location.href;
    // let dialogId = Number(loc.charAt(loc.length - 1));
    const dialogsData = props.dialogs
        .map( (dialog) => <MiniDialogs
            name={dialog.Name}
            img={dialog.Avatar}
            id={dialog.id}
            message={dialog.Messages[dialog.Messages.length - 1].Message}
            lastImg={dialog.Messages[dialog.Messages.length - 1].Avatar}
            getDialogs={props.getUserAllMessagesThunk}

        />);
    // debugger
    return(
        <div>
            {dialogsData}
        </div>
    )
}

export default DialogLists

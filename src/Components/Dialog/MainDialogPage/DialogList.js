import React from "react";
import MiniDialogs from "./MiniDialogs/DialogsMini";

function DialogLists(props) {
    // debugger
    let loc = window.location.href;
    let dialogId = Number(loc.charAt(loc.length - 1));
    const dialogsData = props.state.messageReducer.Dialogs
        .map( (dialog) => <MiniDialogs
            name={dialog.Name}
            img={dialog.Avatar}
            id={dialog.id}
            lastImg={dialog.Messages[dialog.Messages.length - 1].Avatar}
            message={dialog.Messages[dialog.Messages.length - 1].Message}
        />);
    return(
        <div>
            {dialogsData}
        </div>
    )
}

export default DialogLists
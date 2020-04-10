import React from "react";
import MiniDialogs from "./MiniDialogs/DialogsMini";
import emptyPhoto from '../../../img/Avatars/nullPhoto.jpg'

function DialogLists(props) {
    // debugger
    let loc = window.location.href;
    let dialogId = Number(loc.charAt(loc.length - 1));
    const dialogsData = props.state.messageReducer.Dialogs
        .map( (dialog) => <MiniDialogs
            name={dialog.Name}
            img={dialog.Avatar}
            id={dialog.id}
            message={dialog.Messages[dialog.Messages.length - 1].Message || 'Write me anything'}
            lastImg={dialog.Messages[dialog.Messages.length - 1].Avatar || emptyPhoto}

        />);
    debugger
    return(
        <div>
            {dialogsData}
        </div>
    )
}

export default DialogLists

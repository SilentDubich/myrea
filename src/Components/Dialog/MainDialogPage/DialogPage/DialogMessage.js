import React from "react";
import Person from "../../../../CssModules/Dialog/PersonDialog.module.css";
import Posts from "../../../../CssModules/Profile/MyPosts/posts.module.css";
import {deleteMessageCreation} from "../../../DataBases/Reducers/MessagesReducer";

function Message(props) {
    // debugger
    let setDeleteMessage = () => {
        // props.dispatch(deleteMessageCreation(props.id, props.mesId))
        props.deleteMessage(props.mesId, props.id )
    };
    return(
        <div>
            <div className={Person.dialog__flex}>
                <div className={`${Person.dialog_name__margin}`}>
                    <img className={Person.dialog_img} src={props.avatars}/>
                </div>
                <div className={`${Person.dialog_name} ${Person.dialog_name__margin}`}>
                    <p>{props.who}</p>
                </div>
                <div className={`${Person.dialog_time} ${Person.dialog_name__margin}`}>
                    <p>{props.date}</p>
                </div>
                <div className={`${Person.deleteButton__marginLeft}`}>
                    <button onClick={setDeleteMessage} className={` ${Posts.deleteButton__decor}`}><span>&#10005;</span></button>
                </div>
            </div>
            <div className={`${Person.message__marginLeft} ${Person.message__containerSize}`}>
                <p className={`${Person.message__marginTop}`}>{props.message}</p>
            </div>
        </div>
    )
}

export default Message

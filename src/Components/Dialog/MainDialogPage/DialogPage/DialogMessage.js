import React from "react";
import Person from "../../../../CssModules/Dialog/PersonDialog.module.css";
import Posts from "../../../../CssModules/Profile/MyPosts/posts.module.css";
import {deleteMessageCreation} from "../../../DataBases/Reducers/MessagesReducer";
import {NavLink} from "react-router-dom";
import {getProfileThunk} from "../../../DataBases/Reducers/ProfileInfoReducer";

function Message(props) {
    // debugger
    let setDeleteMessage = () => {
        // props.dispatch(deleteMessageCreation(props.id, props.mesId))
        props.deleteMessage(props.mesId, props.id )
    };
    let throwToProfile = () => {
        let meOrNot = props.senderId === props.myId ? 'me' : 'notMe'
        props.setAnotherProfile(props.senderId, meOrNot)
        // debugger
    }
    // onClick={throwToProfile} to={`profile/` + props.id}
    return(
        <div className={`${!props.viewed && Person.dialog_viewedMessages__color}`}>
            <div className={Person.dialog__flex}>
                <NavLink onClick={throwToProfile} to={`/profile/${props.senderId}`} className={`${Person.dialog_name__margin}`}>
                    <img className={Person.dialog_img} src={props.avatars}/>
                </NavLink>
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

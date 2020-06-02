import React, {FC} from "react";
import Person from "../../../../CssModules/Dialog/PersonDialog.module.css";
import Posts from "../../../../CssModules/Profile/MyPosts/posts.module.css";
import {NavLink} from "react-router-dom";

type mapStateToProps = {
    id: number
    mesId: number
    viewed: boolean
    senderId: number
    avatars: string
    message: string
    who: string
    date: string
    deleteMessage: (mesId: number, id: number) => void
    setAnotherProfile: (id: number, who: string) => void
    myId: number
}


export const Message:FC<mapStateToProps> = (props) => {
    let setDeleteMessage = () => {
        props.deleteMessage(props.mesId, props.id)
    };
    let throwToProfile = () => {
        let meOrNot = props.senderId === props.myId ? 'me' : 'notMe'
        props.setAnotherProfile(props.senderId, meOrNot)
    }
    return (
        <div className={`${!props.viewed && Person.dialog_viewedMessages__color}`}>
            <div className={Person.dialog__flex}>
                <NavLink onClick={throwToProfile} to={`/profile/${props.senderId}`}
                         className={`${Person.dialog_name__margin}`}>
                    <img className={Person.dialog_img} src={props.avatars}/>
                </NavLink>
                <div className={`${Person.dialog_name} ${Person.dialog_name__margin}`}>
                    <p>{props.who}</p>
                </div>
                <div className={`${Person.dialog_time} ${Person.dialog_name__margin}`}>
                    <p>{props.date}</p>
                </div>
                <div className={`${Person.deleteButton__marginLeft}`}>
                    <button onClick={setDeleteMessage} className={` ${Posts.deleteButton__decor}`}><span>&#10005;</span>
                    </button>
                </div>
            </div>
            <div className={`${Person.message__marginLeft} ${Person.message__containerSize}`}>
                <p className={`${Person.message__marginTop}`}>{props.message}</p>
            </div>
        </div>
    )
}

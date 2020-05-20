import React from "react";
import {NavLink} from "react-router-dom";
import Dialog from "../../../../CssModules/Dialog/DialogFriend.module.css";
import Friend from "../../../../CssModules/Profile/FriendList/Friends.module.css";
import emptyPhoto from "../../../../img/Avatars/nullPhoto.jpg";
import AddButtonContainer from "../../../Common/AddButton/addButtonContainer";
import Preloaders from "../../../../CssModules/Preloader/Preloaders.module.css";


function Users(props) {
    let throwProfileInfo = e => {
        if (props.isFetching) return e.preventDefault()
        props.setAnotherProfile(props.id, 'notMe')
    }
    return (
        <div className={`${props.isFetching ? Preloaders.Preloader__backgroundOpacity : null}`}>
            <NavLink onClick={throwProfileInfo} to={'/profile/' + props.id}
                     className={`${Dialog.display__flex} ${Dialog.hover__decor} ${Dialog.NavLinks__fontsDecor}`}>
                <div>
                    <img className={`${Friend.Friend__Ava} ${Dialog.display__AvaPosition}`}
                         src={props.avatar || emptyPhoto} alt='Ava'/>
                </div>
                <div className={Dialog.border__borderBottom}>
                    <p className={`${Dialog.text__NameFontsDecor}`}>{`${props.name}`}</p>
                </div>
            </NavLink>
            <AddButtonContainer id={props.id} avatar={props.avatar} name={props.name} followed={props.follow}/>
        </div>
    )
}

export default Users

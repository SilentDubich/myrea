import React from "react";
import Avatar from '../../../img/catOnPony.jpg';
import Sarumyan from '../../../img/Avatars/sarumyan.jpg'
import Content from "../../../CssModules/content.module.css";

function AvatarPhoto(props) {
    return(
        <div className={`${Content.content__mainContentHeader}`}>
            <div className={`${Content.content__mainContentAvatar}`}>
                <img src={props.state.profileInfoReducer.Avatar}/>
            </div>
        </div>
    )
}

export default AvatarPhoto
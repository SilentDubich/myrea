import React from "react";
import Content from "../../../CssModules/content.module.css";
import emptyPhoto from '../../../img/Avatars/nullPhoto.jpg'

function AvatarPhoto(props) {
    // debugger
    return(
        <div className={`${Content.content__mainContentHeader}`}>
            <div className={`${Content.content__mainContentAvatar}`}>
                <img src={props.avatar || emptyPhoto}/>
            </div>
        </div>
    )
}

export default AvatarPhoto

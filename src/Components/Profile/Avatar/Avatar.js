import React, {useEffect, useState} from "react";
import Content from "../../../CssModules/content.module.css";
import emptyPhoto from '../../../img/Avatars/nullPhoto.jpg'

function AvatarPhoto(props) {
    let [avatar, setAvatar] = useState(props.avatar)
    useEffect(() => {
        setAvatar(props.avatar)
    }, [props.avatar])

    // debugger
    let uploadFile = () => {
        let formData = new FormData();
        let image = document.querySelector('#photo');
        formData.append('image', image.files[0]);
        props.updatePhoto(formData, props.id)
    }

    return(
        <div className={`${Content.content__menu_decorationBlocks}`}>
            <div className={`${Content.content__mainContentAvatar}`}>
                <img className={`${Content.content__mainContentAvatar}`} src={avatar || emptyPhoto}/>
            </div>
            <div><input id={'photo'} type='file'/><button onClick={uploadFile}>Load</button></div>
        </div>
    )
}

export default AvatarPhoto

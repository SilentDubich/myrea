import React, {useEffect, useState} from "react";
import Content from "../../../CssModules/content.module.css";
import emptyPhoto from '../../../img/Avatars/nullPhoto.jpg'
import {putNewDialogThunk} from "../../DataBases/Reducers/MessagesReducer";
import AddButtonContainer from "../../Friends/FindFriends/AddButton/addButtonContainer";
import * as croppie from "croppie";
import AvatarEditor from "react-avatar-editor";
import MyEditor from "./AvatarEditor";
import {updatePhotoSize, uploadPhoto} from "../../DataBases/Reducers/ProfileInfoReducer";

function AvatarPhoto(props) {
    // debugger
    let [avatar, setAvatar] = useState(props.avatar)
    useEffect(() => {
        setAvatar(props.avatar)
    }, [props.avatar])

    // debugger
    let uploadFile = () => {
        let formData = new FormData();
        let image = document.querySelector('#photo');
        formData.append('image', image.files[0]);
        debugger
        props.updatePhoto(formData, props.id)

    }
    let startDialog = () => {
        props.putNewDialogThunk({id: props.id, name: props.name, avatar: props.avatar})
        // debugger
    }


    return(
        <div className={`${Content.content__menu_decorationBlocks}`}>
            <div className={`${Content.content__mainContentAvatar}`}>
                <img className={`${Content.content__mainContentAvatar}`} src={avatar || emptyPhoto}/>
            </div>
            {
                props.myProfile
                ?
                <div>
                    <input id={'photo'} type='file'/>
                    <button onClick={uploadFile}>Load</button>
                    <MyEditor
                        updatePhoto={props.updatePhoto}
                        id={props.id}
                        uploadPhoto={props.uploadPhoto}
                        updatePhotoSize={props.updatePhotoSize}
                        tempPhoto={props.tempPhoto}
                    />
                </div>
                :
                <div>
                    <button onClick={startDialog}>Start dialog</button>
                    <AddButtonContainer id={props.id}
                                        name={props.name}
                                        followed={props.followed}
                                        avatar={props.avatar}
                    />
                </div>
            }
        </div>
    )
}

export default AvatarPhoto

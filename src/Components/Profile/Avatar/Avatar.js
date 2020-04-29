import React, {useEffect, useState} from "react";
import Content from "../../../CssModules/content.module.css";
import emptyPhoto from '../../../img/Avatars/nullPhoto.jpg'
import AddButtonContainer from "../../Friends/FindFriends/AddButton/addButtonContainer";
import MyEditor from "./AvatarEditor";

function AvatarPhoto(props) {
    let [avatar, setAvatar] = useState(props.avatar)
    useEffect(() => {
        setAvatar(props.avatar)
    }, [props.avatar])
    let startDialog = () => {
        props.putNewDialogThunk({id: props.id, name: props.name, avatar: props.avatar})
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

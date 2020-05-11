import React, {useEffect, useState} from "react";
import Content from "../../../CssModules/content.module.css";
import emptyPhoto from '../../../img/Avatars/nullPhoto.jpg'
import AddButtonContainer from "../../Friends/FindFriends/AddButton/addButtonContainer";
import MyEditor from "./AvatarEditor";
import buttonsS from "../../../CssModules/buttonsUnderAva.module.css"

function AvatarPhoto(props) {
    const [avatar, setAvatar] = useState(props.avatar)
    useEffect(() => {
        setAvatar(props.avatar)
    }, [props.avatar])
    const startDialog = () => {
        props.putNewDialogThunk({id: props.id, name: props.name, avatar: props.avatar})
    }

    const startDialogButtonClasses = `
    ${Content.content__asideRightButton_decor} 
    ${Content.content__asideRightButtonPadding}
    ${buttonsS.main_buttons__width}
    `;
    return (
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
                        <div>
                            <button className={`${startDialogButtonClasses}`} onClick={startDialog}>Start dialog
                            </button>
                        </div>
                        <div>
                            <AddButtonContainer id={props.id}
                                                name={props.name}
                                                followed={props.followed}
                                                avatar={props.avatar}
                            />
                        </div>

                    </div>
            }
        </div>
    )
}

export default AvatarPhoto

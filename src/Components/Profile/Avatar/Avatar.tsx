import React, {FC, useEffect, useState} from "react";
import Content from "../../../CssModules/content.module.css";
import emptyPhoto from '../../../img/Avatars/nullPhoto.jpg'
import AddButtonContainer from "../../Common/AddButton/addButtonContainer";
import MyEditor from "./AvatarEditor";
import buttonsS from "../../../CssModules/buttonsUnderAva.module.css"

type mapStateType = {
    avatar: string
    id: number
    name: string
    myProfile: boolean
    followed: boolean
}

type mapDispatchType = {
    updatePhoto: (formData: File, id: number) => void
    putNewDialogThunk: (id: number) => void
}

type PropsType = mapStateType & mapDispatchType

export const AvatarPhoto:FC<PropsType> = (props) => {
    const [avatar, setAvatar] = useState(props.avatar)
    useEffect(() => {
        setAvatar(props.avatar)
    }, [props.avatar])
    const startDialog = () => {
        props.putNewDialogThunk(props.id)
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
                        <MyEditor updatePhoto={props.updatePhoto} id={props.id}/>
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

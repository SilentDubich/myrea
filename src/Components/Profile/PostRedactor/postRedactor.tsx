import React, {FC} from "react";
import Content from "../../../CssModules/content.module.css";
import {ProfileType} from "../../Common/types";

type mapStateType = {
    Temp: string
    currentProfile: boolean
}

type mapDispatchType = {
    updatePostTextCreation: (text: string) => void
    postCreation: (currentProfile: boolean) => void
}

type PropsType = mapStateType & mapDispatchType

export const PostRedactor:FC<PropsType> = (props) => {
    let ref = React.createRef<HTMLTextAreaElement>();
    let setPostClick = () => {
        if (ref.current) {
            props.postCreation(props.currentProfile)
        }
    };

    let setPostKeyPress = (event: React.KeyboardEvent) => {
        if (ref.current){
            if (event.which === 13){
                props.postCreation(props.currentProfile);
                event.preventDefault()
            }
        }
    };

    let currentText = () => {
        if (ref.current) {
            let text = ref.current.value;
            props.updatePostTextCreation(text)
        }
    };

    return(
        <div className={`${Content.content__menu_decorationBlocks}`}>
            <div>
                <textarea
                    onChange={currentText}
                    onKeyPress={setPostKeyPress}
                    value={props.Temp}
                    ref={ref}
                    placeholder='Write anything...'
                    className={`${Content.content__asideRightInput_decor}`}
                />
                <button
                    onClick={setPostClick}
                    className={`
                    ${Content.content__asideRightButton_decor} 
                    ${Content.content__asideRightButtonPadding}
                    `}
                >Push me</button>
            </div>
        </div>
    )
}

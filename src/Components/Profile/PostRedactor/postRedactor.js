import React from "react";
import Content from "../../../CssModules/content.module.css";

function PostRedactor(props) {
    let ref = React.createRef();
    let setPostClick = () => {
        let text = ref.current.value;
        if (text){
            props.setPost(props.currentProfile)
        }
    };

    let setPostKeyPress = event => {
        let text = ref.current.value;
        if (text){
            if (event.which === 13){
                props.setPost(props.currentProfile);
                event.preventDefault()
            }
        }
    };

    let currentText = () => {
        let text = ref.current.value;
        props.currentText(text)
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
export default PostRedactor

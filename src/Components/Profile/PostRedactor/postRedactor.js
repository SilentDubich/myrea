import React from "react";
import Content from "../../../CssModules/content.module.css";

function PostRedactor(props) {
    // debugger
    let ref = React.createRef();
    let setPostClick = event => {
        let text = ref.current.value;
        if (text){
            props.setPost()
        }
    };

    let setPostKeyPress = event => {
        let text = ref.current.value;
        if (text){
            if (event.which === 13){
                props.setPost();
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
                    // onChange={props.updateText}
                    id='1'
                    onChange={currentText}
                    onKeyPress={setPostKeyPress}
                    value={props.Temp}
                    // value={props.state.postsReducer.Temp[0].PostRedactor}
                    ref={ref}
                    placeholder='Write anything...'
                    className={`${Content.content__asideRightInput_decor}`}
                />
                <button
                    // onClick={props.addPost}
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
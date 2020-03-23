import React from "react";
import Content from "../../../CssModules/content.module.css";

function AddButton(props) {
    debugger
    let add = () => {
        props.addFriend(props.id, props.name, props.avatar);
    };
    return (
        <div>
            <button
                onClick={add}
                className={`
                ${Content.content__asideRightButton_decor} 
                ${Content.content__asideRightButtonPadding}
                ${Content.content__asideRightButton_margin}
                `}>
                Add
            </button>
        </div>
    )
}

export default AddButton
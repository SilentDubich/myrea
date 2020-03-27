import React from "react";
import Content from "../../../../CssModules/content.module.css";

function AddButton(props) {
    // debugger
    let add = () => {
        props.addFriend(props.id, props.name, props.avatar, true);
        props.addUser(props.id)
    };
    let deleteFriend = () => {
        props.deleteFriend(props.id);
        props.deleteUser(props.id)
    }
    return (
        <div>

            {props.followed ? <button
                onClick={deleteFriend}
                className={`
                ${Content.content__asideRightDeleteButton_decor} 
                ${Content.content__asideRightButtonPadding}
                ${Content.content__asideRightButton_margin}
                `}>
                Delete
            </button> : <button
                onClick={add}
                className={`
                ${Content.content__asideRightButton_decor} 
                ${Content.content__asideRightButtonPadding}
                ${Content.content__asideRightButton_margin}
                `}>
                Add
            </button>}

        </div>
    )
}

export default AddButton

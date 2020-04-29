import React from "react";
import Content from "../../../CssModules/content.module.css";
import Dialog from '../../../CssModules/Dialog/DialogFriend.module.css';
import {DialogsListContainer} from "./DialogListContainer";


function Dialogs(props) {
    let temp = React.createRef();
    let currentText = () => {
        let text = temp.current.value;
        props.updateSearchText(text.toLowerCase())
    };
    return (
        <div className={`${Content.content__menu_decorationBlocks}`}>
            <div>
                <input className={`${Dialog.input__width} ${Dialog.input__decor} ${Dialog.input__padding}`}
                       placeholder='Search'
                       ref={temp}
                       onChange={currentText}
                />
            </div>
            <div>
                <DialogsListContainer/>
            </div>
        </div>
    )
}

export default Dialogs

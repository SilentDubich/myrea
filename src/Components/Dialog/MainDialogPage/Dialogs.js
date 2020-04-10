import React from "react";
import Content from "../../../CssModules/content.module.css";
import Dialog from '../../../CssModules/Dialog/DialogFriend.module.css';
import DialogLists from "./DialogList";
import {DialogsListContainer} from "./DialogListContainer";


function Dialogs(props) {
    return (
        <div className={`${Content.content__menu_decorationBlocks}`}>
            <div>
                <input className={`${Dialog.input__width} ${Dialog.input__decor} ${Dialog.input__padding}`}
                       placeholder='Search'/>
            </div>
            <div>
                {/*<DialogLists*/}
                {/*    dispatch={props.dispatch}*/}
                {/*    state={props.state}*/}
                {/*/>*/}
                <DialogsListContainer/>
            </div>
        </div>
    )
}

export default Dialogs

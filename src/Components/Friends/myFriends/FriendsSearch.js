import React from "react";
import Friends from '../../../CssModules/Friends/Friends.module.css'
import Dialog from "../../../CssModules/Dialog/DialogFriend.module.css";
import {NavLink} from "react-router-dom";
import Content from "../../../CssModules/content.module.css";


function FriendsSearch(props) {
    let temp = React.createRef();
    let currentText = () => {
        let text = temp.current.value;
        props.updateSearch(text)
    };
    return(
        <div className={Friends.container__displayFlex}>
            <input
                placeholder='Search friend...'
                className={`${Dialog.input__width} ${Dialog.input__decor} ${Dialog.input__padding}`}
                onChange={currentText}
                ref={temp}
                value={props.tempSearch}
            />
            <NavLink to='users'>
                <button className={`${Content.content__asideRightButton_decor} ${Content.content__asideRightButtonPadding}`}>Find friends</button>
            </NavLink>
        </div>
    )
}

export default FriendsSearch
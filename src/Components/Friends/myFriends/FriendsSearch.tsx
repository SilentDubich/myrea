import React, {FC} from "react";
import Friends from '../../../CssModules/Friends/Friends.module.css'
import Dialog from "../../../CssModules/Dialog/DialogFriend.module.css";
import {NavLink} from "react-router-dom";
import Content from "../../../CssModules/content.module.css";

type mapStateToProps = {
    tempSearch: string
}

type mapDispatchType = {
    updateSearch: (text: string) => void
}

type PropsType = mapStateToProps & mapDispatchType

export const FriendsSearch:FC<PropsType> = (props) => {
    let temp = React.createRef<HTMLInputElement>();
    let currentText = () => {
        if (temp.current) {
            let text = temp.current.value;
            props.updateSearch(text)
        }
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
import React, {FC} from "react";
import DialogsListContainer from "./DialogListContainer";
import Content from "../../../CssModules/content.module.css";
import Dialog from '../../../CssModules/Dialog/DialogFriend.module.css';

type mapStateToPropsType = {
    tempSearch: string
    DialogsListContainer: React.Component<any, any>
}

type mapDispatchProps = {
    updateSearchText: (text: string) => void
}

type PropsType = mapStateToPropsType & mapDispatchProps

function DialogsListContainerRender(Elem: new() => React.Component<any, any>) {
    return <Elem/>;
}


export const Dialogs:FC<PropsType> = (props) => {
    let temp = React.createRef<HTMLInputElement>();
    let currentText = () => {
        if (temp.current) {
            let text = temp.current.value;
            props.updateSearchText(text)
        }
    };

    return (
        <div className={`${Content.content__menu_decorationBlocks}`}>
            <div>
                <input className={`${Dialog.input__width} ${Dialog.input__decor} ${Dialog.input__padding}`}
                       placeholder='Search'
                       ref={temp}
                       value={props.tempSearch}
                       onChange={currentText}
                />

            </div>
            <div>
                <DialogsListContainer/>
            </div>
        </div>
    )
}

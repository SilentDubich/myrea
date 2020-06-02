import React, {FC, RefObject} from "react";
import Person from "../../../../../CssModules/Dialog/PersonDialog.module.css";
import {Field} from "redux-form";
import {ProfileType} from "../../../../Common/types";




type mapStateToProps = {
    Temp: string
    id: number
    index: number
    me: ProfileType
}

type mapDispatchType = {
    postMessageThunk: (id: number, text: string, me: ProfileType) => void
    updateMessageCreation: (text: string, index: number) => void
}

type PropsType = mapStateToProps & mapDispatchType

export const Input:FC<PropsType> = (props) => {
    let ref = React.createRef<HTMLInputElement>();
    let post = (event: any) => {
        if (event.which === 13 && ref.current) {
            let text = ref.current.value
            props.postMessageThunk(props.id, text, props.me)
            ref.current.value = ''
        }
    }
    let currentText = () => {
        let text
        if (ref.current) {
            text = ref.current.value;
            props.updateMessageCreation(text, props.index)
        }
    };
    return(
        <div className={`${Person.input__margins} ${Person.input__borderTop} ${Person.input__decor}`}>
            <input
                onChange={currentText}
                onKeyPress={post}
                value={props.Temp}
                ref={ref}
                className={Person.inputField__border}
                placeholder='Your message'
            />
        </div>
    )
}

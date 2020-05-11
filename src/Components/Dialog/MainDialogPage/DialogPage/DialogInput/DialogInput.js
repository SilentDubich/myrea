import React from "react";
import Person from "../../../../../CssModules/Dialog/PersonDialog.module.css";
import {Field} from "redux-form";

function Input(props) {
    let ref = React.createRef();
    let post = event => {
        let text = ref.current.value;
        if (event.which === 13) {
            props.postMessageThunk(props.id, text, props.me)
            ref.current.value = ''
        }
    }

    let currentText = () => {
        let text = ref.current.value;
        props.currentText(text, props.index)
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

export default Input

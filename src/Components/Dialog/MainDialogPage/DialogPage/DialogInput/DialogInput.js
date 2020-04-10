import React from "react";
import Person from "../../../../../CssModules/Dialog/PersonDialog.module.css";

function Input(props) {
    let ref = React.createRef();
    let submit = event => {
        if(event.which === 13){
            props.submit()
            // props.sendMessage()
        }
    };

    let post = (event) => {
        let text = ref.current.value;
        if (event.which === 13) {
            props.postMessageThunk(2, text)
        }
    }

    let currentText = () => {
        let text = ref.current.value;
        props.currentText(text)
    };

    // debugger
    return(
        <div className={`${Person.input__margins} ${Person.input__borderTop} ${Person.input__decor}`}>
            <input
                onChange={currentText}
                onKeyPress={post}
                value={props.Temp}
                // value={props.state.messageReducer.Dialogs[dialogId].Temp}
                ref={ref}
                className={Person.inputField__border}
                placeholder='Your message'
            />
        </div>
    )
}

export default Input

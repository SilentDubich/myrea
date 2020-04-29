import React from "react";
import Person from "../../../../CssModules/Dialog/PersonDialog.module.css";

function Upper(props) {
    // debugger
    return(
        <div className={`${Person.upper__border}  ${Person.upper__marginBottom}`}>
            <p className={`
            ${Person.upper__font} 
            ${Person.upper_text__margin} 
            ${Person.upper_text__padding}
            `}
            >
                {`${props.state.messageReducer.Dialogs[props.id].userName}`}
            </p>
        </div>
    )
}

export default Upper

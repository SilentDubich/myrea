import React, {FC} from "react";
import Person from "../../../../CssModules/Dialog/PersonDialog.module.css";
import {DialogType} from "../../../Common/types";

type mapStateToPropsType = {
    dialogs: Array<DialogType>
    id: number
}

export const Upper:FC<mapStateToPropsType> = (props) => {
    return(
        <div className={`${Person.upper__border}  ${Person.upper__marginBottom}`}>
            <p className={`
            ${Person.upper__font} 
            ${Person.upper_text__margin} 
            ${Person.upper_text__padding}
            `}
            >
                {`${props.dialogs[props.id].userName}`}
            </p>
        </div>
    )
}

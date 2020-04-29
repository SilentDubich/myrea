import React from "react";
import {Field} from "redux-form";


export const CreateFieldForm = ({name, type, component, label, text = '', props = {}, validators = []}) => {
    return (
        <div>
            <span>{text}</span>
            <div>
                <Field
                    name={name}
                    type={type}
                    component={component}
                    label={label}
                    validate={validators}
                />
            </div>
        </div>
    )
}



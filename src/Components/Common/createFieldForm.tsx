import React from "react";
import {Field} from "redux-form";
import {validatorType} from "./validator";



export function CreateFieldForm<N extends string>(
    name: N,
    type: 'text' | 'checkbox' | 'password',
    component: any,
    label: string | null,
    props: any = {},
    validators: Array<validatorType> = []
) {
    return (
        <div>
            <div>
                <Field
                    name={name}
                    type={type}
                    component={component}
                    label={label}
                    validate={validators}
                    {...props}
                />
            </div>
        </div>
    )
}


export type GetStringKeys<T> = Extract<keyof T, string>




import React, {useState} from "react";
import {Field} from "redux-form";
import {CreateFieldForm} from "../../Common/createFieldForm";
import {renderField} from "../../Validations/LoginValidate/loginAsyncForm";


function ChangeName(props) {
    let [mode, switchMode] = useState(false);
    return (
        <div>
            <div>
                {CreateFieldForm(
                    {
                        name: 'fullName',
                        type: 'text',
                        component: renderField('input'),
                        label: 'What is your name ?',
                        text: 'Name:'
                    }
                )}
            </div>
        </div>
    )
}


export default ChangeName

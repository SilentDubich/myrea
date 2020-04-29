import React from "react";
import {Field} from "redux-form";
import {CreateFieldForm} from "../../Common/createFieldForm";
import {renderField} from "../../Validations/LoginValidate/loginAsyncForm";


function ChangeAboutMe(props) {
    return (
        <div>
            {CreateFieldForm(
                {
                    name: 'aboutMe',
                    type: 'text',
                    component: renderField('textarea'),
                    label: 'Tell about yourself',
                    text: 'About Me:'
                }
            )}
        </div>
    )
}

export default ChangeAboutMe

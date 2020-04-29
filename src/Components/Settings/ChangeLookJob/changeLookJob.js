import React from "react";
import {Field} from "redux-form";
import {CreateFieldForm} from "../../Common/createFieldForm";
import {renderField} from "../../Validations/LoginValidate/loginAsyncForm";
import validate from "../../Common/validator";


let required = validate('lookingForAJobDescription')

function ChangeLookJob(props) {
    return (
        <div>
            <span>Looking for job: </span>
            <div>
                {CreateFieldForm(
                    {
                        name: 'lookingForAJob',
                        type: 'checkbox',
                        component: renderField('input'),
                    }
                )}
            </div>
            <div>
                {CreateFieldForm(
                    {
                        name: 'lookingForAJobDescription',
                        type: 'text',
                        component: renderField('textarea'),
                        validators: [validate]
                    }
                )}
            </div>
        </div>
    )
}

export default ChangeLookJob

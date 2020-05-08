import React from "react";
import {Field} from "redux-form";
import {CreateFieldForm} from "../../Common/createFieldForm";
import {renderField} from "../../Validations/LoginValidate/loginAsyncForm";
import validate from "../../Common/validator";
import settingsS from "../../../CssModules/Settings/settingsStyles.module.css";


let required = validate('lookingForAJobDescription')

function ChangeLookJob(props) {
    const containerClasses = `${settingsS.settings_container__flex} ${settingsS.settings_container__margin}`
    const paramClasses = `${settingsS.settings_param__decor}`
    const inputClasses = `${settingsS.settings_input__decor} ${settingsS.settings_input__padding} ${settingsS.settings_input__margins}`
    const checkBoxClasses = `${settingsS.settings_checkbox}`
    return (
        <div>
            <div className={containerClasses}>
                <div className={paramClasses}>
                    <span>My skills:</span>
                </div>
                <div className={inputClasses}>
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
            <div className={containerClasses}>
                <div className={paramClasses}>
                    <span>Looking for job:</span>
                </div>
                <div className={checkBoxClasses}>
                    {CreateFieldForm(
                        {
                            name: 'lookingForAJob',
                            type: 'checkbox',
                            component: renderField('input'),
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default ChangeLookJob

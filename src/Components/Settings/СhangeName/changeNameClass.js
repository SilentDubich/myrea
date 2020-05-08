import React, {useState} from "react";
import {Field} from "redux-form";
import {CreateFieldForm} from "../../Common/createFieldForm";
import {renderField} from "../../Validations/LoginValidate/loginAsyncForm";
import settingsS from "../../../CssModules/Settings/settingsStyles.module.css";


function ChangeName(props) {
    const containerClasses = `${settingsS.settings_container__flex} ${settingsS.settings_container__margin}`
    const paramClasses = `${settingsS.settings_param__decor}`
    const inputClasses = `${settingsS.settings_input__decor} ${settingsS.settings_input__padding} ${settingsS.settings_input__margins}`
    return (
        <div className={containerClasses}>
            <div className={paramClasses}>
                <span>Name:</span>
            </div>
            <div className={inputClasses}>
                {CreateFieldForm(
                    {
                        name: 'fullName',
                        type: 'text',
                        component: renderField('input'),
                        label: 'What is your name ?',
                    }
                )}
            </div>
        </div>
    )
}


export default ChangeName

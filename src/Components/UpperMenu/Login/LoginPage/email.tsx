import React from "react";
import {CreateFieldForm, GetStringKeys} from "../../../Common/createFieldForm";
import {renderField} from "../../../Validations/LoginValidate/loginAsyncForm";
import settingsS from "../../../../CssModules/Settings/settingsStyles.module.css";


function EmailField(props: any) {
    const containerClasses = `${settingsS.settings_container__flex} ${settingsS.settings_container__margin}`
    const paramClasses = `${settingsS.settings_param__decor}`
    const inputClasses = `${settingsS.settings_input__decor} ${settingsS.settings_input__padding} ${settingsS.settings_input__margins}`
    return (
        <div className={containerClasses}>
            <div className={paramClasses}>
                <span>Email:</span>
            </div>
            <div className={inputClasses}>
                {CreateFieldForm<'email'>('email', 'text', renderField('input'), 'Email')}
            </div>
        </div>
    )
}

export default EmailField
import React from "react";
import {CreateFieldForm} from "../../../Common/createFieldForm";
import {renderField} from "../../../Validations/LoginValidate/loginAsyncForm";
import settingsS from "../../../../CssModules/Settings/settingsStyles.module.css";


function RememberMe(props: any) {
    const containerClasses = `${settingsS.settings_container__flex} ${settingsS.settings_container__margin}`
    const paramClasses = `${settingsS.settings_param__decor}`
    const inputClasses = `${settingsS.settings_checkbox}`
    return (
        <div className={containerClasses}>
            <div className={paramClasses}>
                <span>Remember me:</span>
            </div>
            <div className={inputClasses}>
                {CreateFieldForm<'remember'>('remember', 'checkbox', renderField('input'), 'Remember me')}
            </div>
        </div>
    )
}

export default RememberMe
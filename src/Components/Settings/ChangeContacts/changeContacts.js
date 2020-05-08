import React from "react";
import {CreateFieldForm} from "../../Common/createFieldForm";
import {renderField} from "../../Validations/LoginValidate/loginAsyncForm";
import settingsS from "../../../CssModules/Settings/settingsStyles.module.css"


function ChangeContacts(props) {
    const containerClasses = `${settingsS.settings_container__flex} ${settingsS.settings_container__margin}`
    const paramClasses = `${settingsS.settings_param__decor}`
    const inputClasses = `${settingsS.settings_input__decor} ${settingsS.settings_input__padding} ${settingsS.settings_input__margins}`
    return (
        <div>
            {Object.keys(props.contacts).map(key => {
                return (
                    <div key={key} className={containerClasses}>
                        <div className={paramClasses}>
                            <span>
                                {key[0].toUpperCase() + key.slice(1) + ':'}
                            </span>
                        </div>
                        <div className={inputClasses}>
                            {CreateFieldForm({
                                name: `contacts.${key}`,
                                type: 'text',
                                component: renderField('input'),
                                label: `Your ${key} link`
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ChangeContacts

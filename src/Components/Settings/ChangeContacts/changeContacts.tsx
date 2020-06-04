import React from "react";
import {CreateFieldForm, GetStringKeys} from "../../Common/createFieldForm";
import {renderField} from "../../Validations/LoginValidate/loginAsyncForm";
import settingsS from "../../../CssModules/Settings/settingsStyles.module.css"
import {ContactsType} from "../../Common/types";

type PropsType = { contacts: ContactsType }


function ChangeContacts(props: PropsType) {
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
                            {CreateFieldForm<any>(`contacts.${key}`, 'text', renderField('input'), `Your ${key} link`)}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default ChangeContacts

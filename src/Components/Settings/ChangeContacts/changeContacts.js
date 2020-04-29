import React from "react";
import {Field} from "redux-form";
import {CreateFieldForm} from "../../Common/createFieldForm";
import {renderField} from "../../Validations/LoginValidate/loginAsyncForm";


function ChangeContacts(props) {
    return (
        <div>
            <span>My contacts: </span>
            <div>
                {Object.keys(props.contacts).map(key => {
                    return (
                        <div key={key}>
                            <b>{key}</b>
                            {CreateFieldForm({
                                name: `contacts.${key}`,
                                type: 'text',
                                component: renderField('input'),
                                label: `Your ${key} link`
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ChangeContacts

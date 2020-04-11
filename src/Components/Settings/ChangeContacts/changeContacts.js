import React from "react";
import {Field} from "redux-form";



function ChangeContacts(props) {
    return (
        <div>
            <span>My contacts: </span>
            <div>
                <Field autoFocus
                       name={'contacts.facebook'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'contacts.website'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'contacts.vk'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'contacts.twitter'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'contacts.instagram'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'contacts.youtube'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'contacts.github'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'contacts.mainLink'}
                       component={'input'}
                       type={'text'}
                />
            </div>
        </div>
    )
}

export default ChangeContacts

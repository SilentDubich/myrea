import React from "react";
import {Field} from "redux-form";



function ChangeContacts(props) {
    return (
        <div>
            <span>My contacts: </span>
            <div>
                <Field autoFocus
                       name={'facebook'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'website'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'vk'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'twitter'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'instagram'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'youtube'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'github'}
                       component={'input'}
                       type={'text'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'mainLink'}
                       component={'input'}
                       type={'text'}
                />
            </div>
        </div>
    )
}

export default ChangeContacts

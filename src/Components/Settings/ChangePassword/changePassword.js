import React, {useEffect, useState} from "react";
import {Field} from "redux-form";
import {changePasswordThunk} from "../../DataBases/Reducers/ProfileInfoReducer";


function ChangePassword(props) {
    let oldPassword = 'ChangePasswordModel.OldPassword'
    let [editMode, setEditMode] = useState(false);
    let onSubmit = data => {
        let formData = new FormData();
        formData.append('ChangePasswordModel.OldPassword', data.ChangePasswordModel.OldPassword);
        formData.append('ChangePasswordModel.NewPassword', data.ChangePasswordModel.NewPassword);
        // let formData = {
        //     'ChangePasswordModel.OldPassword': data.ChangePasswordModel.OldPassword,
        //     'ChangePasswordModel.NewPassword': data.ChangePasswordModel.NewPassword,
        // }
        console.log('submit');
        // props.changePasswordThunk(formData)
        props.changePasswordThunk(formData)
            .then(() => {
                setEditMode(false)
            })
        debugger
    }
    if (!editMode) return <button onClick={() => {
        setEditMode(true)
    }}>Change password</button>
    return (
        <div>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <div>
                    <span>Old password: </span>
                    <div>
                        <Field autoFocus
                               name={'ChangePasswordModel.OldPassword'}
                               component={'input'}
                               type={'text'}
                        />
                    </div>
                </div>
                <div>
                    <span>New password: </span>
                    <div>
                        <Field autoFocus
                               name={'ChangePasswordModel.NewPassword'}
                               component={'input'}
                               type={'text'}
                        />
                    </div>
                </div>
                <div>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )

}

export default ChangePassword

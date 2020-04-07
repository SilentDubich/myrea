import React from "react";
import {Field} from "redux-form";



function ChangePhoto(props) {
    return (
        <div>
            <span>My photo: </span>
            <div>
                <Field autoFocus
                       name={'photo'}
                       component={'input'}
                       type={'file'}
                />
            </div>
        </div>
    )
}

export default ChangePhoto

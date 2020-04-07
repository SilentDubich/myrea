import React from "react";
import {Field} from "redux-form";



function ChangeLookJob(props) {
    return (
        <div>
            <span>Looking for job: </span>
            <div>
                <Field
                       name={'LookingForAJob'}
                       component={'input'}
                       type={'checkbox'}
                />
            </div>
            <div>
                <Field autoFocus
                       name={'LookingForAJobDescription'}
                       component={'textarea'}
                       type={'text'}
                />
            </div>
        </div>
    )
}

export default ChangeLookJob

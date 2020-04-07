import React from "react";
import {Field} from "redux-form";



function ChangeAboutMe(props) {
    return (
        <div>
            <span>About Me: </span>
            <div>
                <Field autoFocus
                       name={'AboutMe'}
                       component={'textarea'}
                       type={'text'}
                />
            </div>
        </div>
    )
}

export default ChangeAboutMe

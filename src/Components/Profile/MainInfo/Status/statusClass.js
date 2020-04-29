import React, {useEffect, useState} from "react";
import {Field} from "redux-form";

function StatusClass(props) {
    let [mode, switchMode] = useState(false)
    let [status, switchStatus] = useState(props.currentProfile.status)

    useEffect(() => {
        switchStatus(props.currentProfile.status)
    }, [props.currentProfile.status])

    let onSubmit = status => {
        props.putStatusThunk(status.status)
            .then( () => {
                switchMode(false);
            }
        )
    }
    return (
        <div>
            {
                mode ?
                <form onSubmit={props.handleSubmit(onSubmit)}>
                    <div>
                        <Field autoFocus
                               name={'status'}
                               component={'input'}
                               type={'text'}
                        />
                    </div>
                    <div>
                        <button>Save</button>
                    </div>
                </form>
                :
                <h3 onClick={() => {if (props.myProfile) switchMode(true)}}>{status ? status : 'Change status'}</h3>
            }
        </div>
    )
}


export default StatusClass

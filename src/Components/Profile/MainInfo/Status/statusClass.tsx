import React, {FC, FormEvent, useEffect, useState} from "react";
import {Field} from "redux-form";
import StatusS from "../../../../CssModules/Profile/Status/statusStyles.module.css"
import {ProfileType} from "../../../Common/types";

type MapStatePropsType = {
    currentProfile: ProfileType
    myProfile: boolean
}

type MapDispatchPropsType = {
    putStatusThunk: (status: string) => void
    handleSubmit: (submit: (formInfo: any) => Promise<void>) => ((event: FormEvent<HTMLFormElement>) => void) | undefined
}

type PropsType = MapStatePropsType & MapDispatchPropsType


export const StatusClass:FC<PropsType> = (props) => {
    const [mode, switchMode] = useState(false)
    const [status, switchStatus] = useState(props.currentProfile.status)
    const [disabled, setDisabled] = useState(false)
    const buttonClasses = `${StatusS.status_button__decor} ${StatusS.status__buttonWidth} ${StatusS.status_button__padding} ${StatusS.status_button__margins}`
    const containerButtonClass = `${StatusS.status_buttons__flex}`
    const inputClasses = `${StatusS.status_input__decor} ${StatusS.status_input__padding}`

    useEffect(() => {
        switchStatus(props.currentProfile.status)
    }, [props.currentProfile.status])

    let onSubmit = async (status: any) => {
        setDisabled(true)
        await props.putStatusThunk(status.status)
        setDisabled(false)
        switchMode(false)
    }

    return (
        <div>
            {
                mode ?
                <form onSubmit={props.handleSubmit(onSubmit)}>
                    <div className={inputClasses}>
                        <Field autoFocus
                               name={'status'}
                               component={'input'}
                               type={'text'}
                        />
                    </div>
                    <div className={containerButtonClass}>
                        <div>
                            <button disabled={disabled}
                                    className={`${disabled && StatusS.status__buttonDisabled} ${buttonClasses}`}
                            >Save</button>
                        </div>
                        <div>
                            <button className={buttonClasses} onClick={() => switchMode(false)}>Cancel</button>
                        </div>
                    </div>
                </form>
                :
                <h3 onClick={() => {if (props.myProfile) switchMode(true)}}>{status ? status : 'Change status'}</h3>
            }
        </div>
    )
}


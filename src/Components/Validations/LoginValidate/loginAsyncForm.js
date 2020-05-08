import React from 'react'
import {reduxForm} from 'redux-form'
import validate from './loginValidateSync'
import asyncValidate from './loginValidateAsync'
import Content from "../../../CssModules/content.module.css";
import EmailField from "../../UpperMenu/Login/LoginPage/email";
import PasswordField from "../../UpperMenu/Login/LoginPage/password";
import RememberMe from "../../UpperMenu/Login/LoginPage/rememberMe";
import settingsS from "../../../CssModules/Settings/settingsStyles.module.css";
import CaptchaField from "../../UpperMenu/Login/LoginPage/captcha";
import loginS from "../../../CssModules/Login/loginStyles.module.css"
import ErrorSVG from "../../../img/fail-1.1s-128px.svg"

export const renderField = Component => ({input, label, type, meta: {asyncValidating, touched, error}}) => (
    <div>
        <div className={asyncValidating ? 'async-validating' : ''}>
            <Component {...input} type={type} placeholder={label}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const AsyncValidationForm = props => {
    const {handleSubmit, pristine, reset, submitting} = props
    let onSubmit = formData => {
        props.logThunk(formData.email, formData.password, formData.remember, formData.captcha)
    };
    const containerClasses = `${settingsS.settings_container__flex} ${settingsS.settings_container__margin}`
    const buttonClasses = `${settingsS.settings__button} ${settingsS.settings__buttonWidth} ${settingsS.settings_button__padding}`
    const errorClass = `${loginS.captcha_error__decor}`
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`${Content.content__menu_decorationBlocks}`}>
                <EmailField/>
                <PasswordField/>
                <RememberMe/>
                <CaptchaField captcha={props.captcha}/>
                {props.error &&
                <div className={`${containerClasses}`}>
                    <div className={`${errorClass} ${containerClasses}`}>
                        <div><img src={ErrorSVG}/></div>
                        <div className={`${loginS.captcha_errorText__margin}`}>
                            <span>{props.error}</span>
                        </div>
                    </div>
                </div>}
                <div className={containerClasses}>
                    <button disabled={props.buttonRequest}
                            className={`${buttonClasses} ${props.buttonRequest && settingsS.settings__buttonDisabled}`}
                            type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'asyncValidation', // a unique identifier for this form
    validate,
    asyncValidate,
    asyncBlurFields: ['email'],
})(AsyncValidationForm)



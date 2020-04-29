import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './loginValidateSync'
import asyncValidate from './loginValidateAsync'
import Person from "../../../CssModules/UpperMenu/UpperMenu.module.css";
import {CreateFieldForm} from "../../Common/createFieldForm";

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
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {CreateFieldForm({name: 'email', type: 'text', component: renderField('input'), label: 'Username'})}
            {CreateFieldForm({name: 'password', type: 'password', component: renderField('input'), label: 'Password'})}
            {CreateFieldForm({name: 'remember', type: 'checkbox', component: renderField('input'), label: 'Remember me'})}
            {props.captcha && <img src={props.captcha}/>}
            {props.captcha && CreateFieldForm({name: 'captcha', type: 'text', component: renderField('input'), label: 'captcha'})}
            {props.error && <div>{props.error}</div>}
            <div>
                <button className={`${props.class} ${props.buttonRequest ? Person.log__buttonDisabled : ''}`}
                        type="submit">
                    Sign Up
                </button>
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



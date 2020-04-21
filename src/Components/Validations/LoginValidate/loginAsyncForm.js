import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './loginValidateSync'
import asyncValidate from './loginValidateAsync'
import Person from "../../../CssModules/UpperMenu/UpperMenu.module.css";

const renderField = ({
                         input,
                         label,
                         type,
                         meta: {asyncValidating, touched, error}
                     }) => (
    <div>
        <label>{label}</label>
        <div className={asyncValidating ? 'async-validating' : ''}>
            <input {...input} type={type} placeholder={label}/>
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
            <Field
                name="email"
                type="text"
                component={renderField}
                label="Username"
            />
            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
            />
            <Field
                name="remember"
                type="checkbox"
                component={renderField}
                label="Remember me"
            />
            {
                props.captcha
                    ?
                    <div>
                        <img src={props.captcha}/>
                        <Field
                            name="captcha"
                            type="text"
                            component={renderField}
                            label="captcha"
                        />
                    </div>
                    :
                    null
            }
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


{/*<form onSubmit={props.handleSubmit(onSubmit)}>*/
}
{/*    <div>*/
}
{/*        <Field name={'email'} placeholder={'Your email'} component={'input'}/>*/
}
{/*    </div>*/
}
{/*    <div>*/
}

{/*        <Field name={'password'} type={'password'} placeholder={'Password'} component={'input'}/>*/
}
{/*    </div>*/
}
{/*    <div>*/
}
{/*        <span>Remember me:</span>*/
}
{/*        <Field name={'remember'} type={'checkbox'} component={'input'}/>*/
}
{/*    </div>*/
}
{/*    <div>*/
}
{/*        <button disabled={props.buttonRequest}*/
}
{/*                className={`${buttonLoginClasses} ${props.buttonRequest ? Person.log__buttonDisabled : ''}`}*/
}
{/*        >*/
}
{/*            Login*/
}
{/*        </button>*/
}
{/*    </div>*/
}
{/*</form>*/
}

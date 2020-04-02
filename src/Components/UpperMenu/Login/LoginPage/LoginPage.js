import React from "react";
import Person from "../../../../CssModules/UpperMenu/UpperMenu.module.css";
import * as axios from "axios";
import {API} from "../../../DataBases/API/API";
import {Redirect} from "react-router-dom";
import {Field} from "redux-form";


function LoginPage(props) {
    let onSubmit = (formData) => {
        props.postLogThunk(formData.email, formData.password, formData.remember)
        // return <Redirect to='/profile'/>
    };
    let buttonLoginClasses =
    `
    ${Person.log__padding}
    ${Person.log__button} 
    `;
    return (
        <div>
            <form onSubmit={props.handleSubmit(onSubmit)}>
                <div>
                    <Field name={'email'} placeholder={'Your email'} component={'input'}/>
                </div>
                <div>

                    <Field name={'password'} type={'password'} placeholder={'Password'} component={'input'}/>
                </div>
                <div>
                    <span>Remember me:</span>
                    <Field name={'remember'} type={'checkbox'} component={'input'}/>
                </div>
                <div>
                    <button disabled={props.buttonRequest}
                            className={`${buttonLoginClasses} ${props.buttonRequest ? Person.log__buttonDisabled : ''}`}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}


export default LoginPage

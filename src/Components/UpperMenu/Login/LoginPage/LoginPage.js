import React from "react";
import Person from "../../../../CssModules/UpperMenu/UpperMenu.module.css";
import * as axios from "axios";
import {API} from "../../../DataBases/API/API";
import {Redirect} from "react-router-dom";
import {Field, reset} from "redux-form";
import AsyncValidationForm from "../../../Validations/LoginValidate/loginAsyncForm";


function LoginPage(props) {
    // let onSubmit = formData => {
    //     props.postLogThunk(formData.email, formData.password, formData.remember)
    //     // return <Redirect to='/profile'/>
    // };
    let buttonLoginClasses =
        `
    ${Person.log__padding}
    ${Person.log__button} 
    `;
    if (props.isLogged && props.initialized) return <Redirect to='/profile'/>;
    return (
        <div>
            <AsyncValidationForm
                buttonRequest={props.buttonRequest}
                logThunk={props.postLogThunk}
                class={buttonLoginClasses}
                captcha={props.captcha}
                initialValues={{'remember': false}}
            />
        </div>
    )
}


export default LoginPage

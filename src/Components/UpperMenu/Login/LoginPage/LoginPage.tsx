import React, {FC} from "react";
import Person from "../../../../CssModules/UpperMenu/UpperMenu.module.css";
import {Redirect} from "react-router-dom";
import AsyncValidationForm from "../../../Validations/LoginValidate/loginAsyncForm";
import {postLogThunk} from "../../../DataBases/Reducers/LoginReducer";

type mapStateType = {
    buttonRequest: boolean
    captcha: string | null
    isLogged: boolean
    initialized: boolean
}

type mapDispatch = {
    postLogThunk: (email: string, password: number, remember: boolean, captcha: string) => void
}

type PropsType = mapStateType & mapDispatch

export const LoginPage:FC<PropsType> = (props) => {
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

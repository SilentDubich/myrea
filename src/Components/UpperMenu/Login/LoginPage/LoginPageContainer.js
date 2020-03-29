import React from "react";
import {connect} from "react-redux";
import {
    changeEmail,
    changePassword,
    changeRemember,
    loginRequest,
    postLogThunk,
    logData
} from "../../../DataBases/Reducers/LoginReducer";
import LoginPage from "./LoginPage";


let mapStateToProps = state => {
    return {
        email: state.loginReducer.email,
        password: state.loginReducer.password,
        remember: state.loginReducer.remember,
        buttonRequest: state.loginReducer.buttonRequest
    }
};


export const LoginPageContainer = connect(mapStateToProps,
    {
        loginRequest, changeEmail, changePassword,
        changeRemember, logData, postLogThunk
    }
)(LoginPage)

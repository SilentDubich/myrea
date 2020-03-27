import React from "react";
import {connect} from "react-redux";
import {changeEmail, changePassword, changeRemember, loginRequest} from "../../../DataBases/Reducers/LoginReducer";
import LoginPage from "./LoginPage";
import {logData} from "../../../DataBases/Reducers/ProfileInfoReducer";




let mapStateToProps = state => {
    return {
        email: state.loginReducer.email,
        password: state.loginReducer.password,
        remember: state.loginReducer.remember
    }
};


export const LoginPageContainer = connect(mapStateToProps, {loginRequest, changeEmail, changePassword, changeRemember, logData})(LoginPage)

import React from "react";
import {connect} from "react-redux";
import {
    postLogThunk,
} from "../../../DataBases/Reducers/LoginReducer";
import LoginPage from "./LoginPage";

let mapStateToProps = state => {
    return {
        buttonRequest: state.loginReducer.buttonRequest,
        captcha: state.loginReducer.captcha,
        isLogged: state.loginReducer.isLogged,
        initialized: state.loginReducer.loadProfileData
    }
};


export const LoginReduxForm = connect(mapStateToProps,
    {
        postLogThunk
    },
)(LoginPage)


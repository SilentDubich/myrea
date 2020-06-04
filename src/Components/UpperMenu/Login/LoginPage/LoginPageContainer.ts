import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {
    postLogThunk,
} from "../../../DataBases/Reducers/LoginReducer";
import {LoginPage} from "./LoginPage";
import {AppStateType} from "../../../DataBases/Redux/Store";

let mapStateToProps = (state: AppStateType) => {
    return {
        buttonRequest: state.loginReducer.buttonRequest,
        captcha: state.loginReducer.captcha,
        isLogged: state.loginReducer.isLogged,
        initialized: state.loginReducer.loadProfileData
    }
};


// @ts-ignore
export const LoginReduxForm = connect(mapStateToProps,
    {postLogThunk}
    // @ts-ignore
)(LoginPage)


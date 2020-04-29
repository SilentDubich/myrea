import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {authRedirect} from "../../Common/redirectToLogin";
import ChangePassword from "./changePassword";
import {reduxForm} from "redux-form";


export const ChangePasswordContainer = compose(
    connect(null, {}),
    authRedirect
)(ChangePassword)

export const ChangePasswordReduxForm = reduxForm({ form: 'password', enableReinitialize : true})(ChangePasswordContainer)

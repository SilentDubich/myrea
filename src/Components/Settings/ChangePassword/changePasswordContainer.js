import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {authRedirect} from "../../redirect";
import ChangePassword from "./changePassword";
import {reduxForm} from "redux-form";
import {changePasswordThunk} from "../../DataBases/Reducers/ProfileInfoReducer";


export const ChangePasswordContainer = compose(
    connect(null, {changePasswordThunk}),
    authRedirect
)(ChangePassword)

export const ChangePasswordReduxForm = reduxForm({ form: 'password', enableReinitialize : true})(ChangePasswordContainer)

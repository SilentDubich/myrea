import React from "react";
import {connect} from "react-redux";
import Settings from "./settings";
import {putProfileInfoThunk} from "../DataBases/Reducers/ProfileInfoReducer";
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {authRedirect} from "../Common/redirectToLogin";
import validate from "../Common/validator";

let mapStateToProps = state => {
    return {
        id: state.profileInfoReducer.logged.userId,
        initialValues: state.profileInfoReducer.logged,
        contacts: state.profileInfoReducer.logged.contacts
    }
}





export const SettingsForm = compose(
    connect(mapStateToProps, {putProfileInfoThunk}),
    reduxForm({ form: 'settings', enableReinitialize : true}),
    authRedirect
)(Settings)

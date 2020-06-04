import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {Settings} from "./settings";
import {putProfileInfoThunk} from "../DataBases/Reducers/ProfileInfoReducer";
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {authRedirect} from "../Common/redirectToLogin";
import validate from "../Common/validator";
import {AppStateType} from "../DataBases/Redux/Store";

let mapStateToProps = (state: AppStateType) => {
    return {
        id: state.profileInfoReducer.logged.userId,
        initialValues: state.profileInfoReducer.logged,
        contacts: state.profileInfoReducer.logged.contacts
    }
}





export const SettingsForm = compose<ComponentType>(
    connect(mapStateToProps, {putProfileInfoThunk}),
    reduxForm({ form: 'settings', enableReinitialize : true}),
    authRedirect
)(Settings)

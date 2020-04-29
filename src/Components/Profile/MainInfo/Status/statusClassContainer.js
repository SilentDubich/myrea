import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {putStatusThunk} from "../../../DataBases/Reducers/ProfileInfoReducer";
import {authRedirect} from "../../../Common/redirectToLogin";
import StatusClass from "./statusClass";
import {reduxForm} from "redux-form";


let mapStateToProps = state => {
    return {
        currentProfile: state.profileInfoReducer.myProfile ?
            state.profileInfoReducer.logged : state.profileInfoReducer.currentProfile,
        myProfile: state.profileInfoReducer.myProfile
    }
}




export const StatusClassContainer = compose(
    connect(mapStateToProps, {putStatusThunk}),
    authRedirect
)(StatusClass)

export const ReduxStatusForm = reduxForm({ form: 'status', enableReinitialize : true})(StatusClassContainer);

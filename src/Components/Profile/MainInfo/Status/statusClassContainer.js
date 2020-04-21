import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getStatus, getStatusThunk, putStatusThunk} from "../../../DataBases/Reducers/ProfileInfoReducer";
import {authRedirect} from "../../../Common/redirectToLogin";
import ProfileCenterInfoClass from "../../MainProfilePage/ProfileCenterInfoClass";
import StatusClass from "./statusClass";
import {reduxForm} from "redux-form";
import {store} from "../../../DataBases/Redux/Store";


let mapStateToProps = state => {
    return {
        // id: state.profileInfoReducer.logged.id,
        currentProfile: state.profileInfoReducer.myProfile ?
            state.profileInfoReducer.logged : state.profileInfoReducer.currentProfile,
        myProfile: state.profileInfoReducer.myProfile
    }
}




export const StatusClassContainer = compose(
    connect(mapStateToProps, {getStatusThunk, putStatusThunk}),
    authRedirect
)(StatusClass)

export const ReduxStatusForm = reduxForm({ form: 'status', enableReinitialize : true})(StatusClassContainer);

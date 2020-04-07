import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getStatus, getStatusThunk, putStatusThunk} from "../../../DataBases/Reducers/ProfileInfoReducer";
import {authRedirect} from "../../../redirect";
import ProfileCenterInfoClass from "../../MainProfilePage/ProfileCenterInfoClass";
import StatusClass from "./statusClass";
import {reduxForm} from "redux-form";
import {store} from "../../../DataBases/Redux/Store";


let mapStateToProps = state => {
    return {
        status: state.profileInfoReducer.logged.Status,
        id: state.profileInfoReducer.logged.id,
    }
}




export const StatusClassContainer = compose(
    connect(mapStateToProps, {getStatusThunk, putStatusThunk}),
    authRedirect
)(StatusClass)

export const ReduxStatusForm = reduxForm({ form: 'status', enableReinitialize : true})(StatusClassContainer);

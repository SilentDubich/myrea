import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {API} from "../DataBases/API/API";
import {logData} from "../DataBases/Reducers/LoginReducer";
import {getMyProfileThunk, getStatusThunk} from "../DataBases/Reducers/ProfileInfoReducer";

let mapStateToRedirect = state => {
    return {
        isLogged: state.loginReducer.isLogged,
        initialized: state.loginReducer.loadProfileData
    }
}


export const authRedirect = Component => {

    class RedirectComponent extends React.Component {

        render() {
            if (!this.props.isLogged && this.props.initialized) return <Redirect to='/login'/>;
            return <Component {...this.props}/>
        }
    }
    let connectedRedirect = connect(mapStateToRedirect)(RedirectComponent)

    return connectedRedirect
};

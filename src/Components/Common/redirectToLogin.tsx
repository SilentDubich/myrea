import React, {FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../DataBases/Redux/Store";

let mapStateToRedirect = (state: AppStateType) => {
    return {
        isLogged: state.loginReducer.isLogged,
        initialized: state.loginReducer.loadProfileData
    }
}

type mapStateToPropsType = {
    isLogged: boolean
    initialized: boolean
}

export const authRedirect = (Component: React.ComponentType<any>) => {

    class RedirectComponent extends React.Component<mapStateToPropsType> {
        render() {
            if (!this.props.isLogged && this.props.initialized) return <Redirect to='/login'/>;
            return <Component {...this.props}/>
        }
    }
    let connectedRedirect: any = connect(mapStateToRedirect)(RedirectComponent)

    return connectedRedirect
};


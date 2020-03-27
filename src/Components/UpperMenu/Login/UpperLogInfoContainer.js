import React from "react";
import {connect} from "react-redux";
import UpperLogInfo from "./UpperLogInfo";




let mapStateToProps = state =>{
    return {
        didLog: state.profileInfoReducer.logged.isLogged,
        Avatar: state.profileInfoReducer.logged.Avatar
    }
};



export const UpperLogInfoContainer = connect(mapStateToProps)(UpperLogInfo)

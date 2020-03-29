import React from "react";
import {connect} from "react-redux";
import UpperLogInfo from "./UpperLogInfo";
import {postLogOutThunk} from "../../DataBases/Reducers/LoginReducer";




let mapStateToProps = state =>{
    return {
        didLog: state.loginReducer.isLogged,
        Avatar: state.profileInfoReducer.logged.Avatar
    }
};



export const UpperLogInfoContainer = connect(mapStateToProps, {postLogOutThunk})(UpperLogInfo)

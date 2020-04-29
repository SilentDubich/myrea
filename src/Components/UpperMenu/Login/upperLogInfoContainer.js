import React from "react";
import {connect} from "react-redux";
import UpperLogInfo from "./UpperLogInfo";
import {postLogOutThunk} from "../../DataBases/Reducers/LoginReducer";
import emptyPhoto from "../../../img/Avatars/nullPhoto.jpg"




let mapStateToProps = state =>{
    // debugger
    return {
        didLog: state.loginReducer.isLogged,
        Avatar: state.profileInfoReducer.logged.photos.large || emptyPhoto
    }
};



export const UpperLogInfoContainer = connect(mapStateToProps, {postLogOutThunk})(UpperLogInfo)

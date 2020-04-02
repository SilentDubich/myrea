import React from "react";
import {connect} from "react-redux";
// import {logData} from "../DataBases/Reducers/ProfileInfoReducer";
import {logData} from "../DataBases/Reducers/LoginReducer";
import UpperClassContainer from "./upperClassContainer";
import {getMyProfileThunk, getStatusThunk} from "../DataBases/Reducers/ProfileInfoReducer";





let mapStateToProps = state =>{
    return{

    }
}



export const UpperClassContainerTwo = connect(mapStateToProps, {logData, getMyProfileThunk, getStatusThunk})(UpperClassContainer)

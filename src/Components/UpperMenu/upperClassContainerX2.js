import React from "react";
import {connect} from "react-redux";
import {logData} from "../DataBases/Reducers/ProfileInfoReducer";
import UpperClassContainer from "./upperClassContainer";





let mapStateToProps = state =>{
    return{

    }
}



export const UpperClassContainerTwo = connect(mapStateToProps, {logData})(UpperClassContainer)

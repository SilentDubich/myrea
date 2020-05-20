import React from "react";
import {connect} from "react-redux";
// import {logData} from "../DataBases/Reducers/ProfileInfoReducer";
import {actionsLogin} from "../DataBases/Reducers/LoginReducer";
import UpperClassContainer from "./upperClassContainer";
import {getMyProfileThunk} from "../DataBases/Reducers/ProfileInfoReducer";


const logData = actionsLogin.logData





export const UpperClassContainerTwo = connect(null, {logData, getMyProfileThunk})(UpperClassContainer)

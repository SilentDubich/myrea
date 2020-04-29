import React from "react";
import {connect} from "react-redux";
// import {logData} from "../DataBases/Reducers/ProfileInfoReducer";
import {logData} from "../DataBases/Reducers/LoginReducer";
import UpperClassContainer from "./upperClassContainer";
import {getMyProfileThunk} from "../DataBases/Reducers/ProfileInfoReducer";








export const UpperClassContainerTwo = connect(null, {logData, getMyProfileThunk})(UpperClassContainer)

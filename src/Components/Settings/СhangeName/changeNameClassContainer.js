import React from "react";
import {connect} from "react-redux";
import ChangeName from "./changeNameClass";


let mapStateToProps = state => {
    return {
        temps: state.profileInfoReducer.temps
    }
}


export const ChangeNameClassContainer = connect(mapStateToProps, {})(ChangeName)

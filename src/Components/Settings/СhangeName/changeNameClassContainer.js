import React from "react";
import {connect} from "react-redux";
import {setTemps} from "../../DataBases/Reducers/ProfileInfoReducer";
import ChangeNameClass from "./changeNameClass";


let mapStateToProps = state => {
    return {
        temps: state.profileInfoReducer.temps
    }
}


export const ChangeNameClassContainer = connect(mapStateToProps, {setTemps})(ChangeNameClass)

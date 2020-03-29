import React from "react";
import {connect} from "react-redux";
import Settings from "./settings";
import {setTemps} from "../DataBases/Reducers/ProfileInfoReducer";

let mapStateToProps = state => {
    return {
        temps: state.profileInfoReducer.temps
    }
}


export const SettingsContainer = connect(mapStateToProps, {setTemps})(Settings)

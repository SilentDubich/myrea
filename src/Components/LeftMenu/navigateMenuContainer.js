import React from "react";
import {connect} from "react-redux";
import {actionsProfile} from "../DataBases/Reducers/ProfileInfoReducer";
import NavigateMenu from "./NavigateMenu";





let mapStateToProps = state => {
    return {
        freshDialogs: state.messageReducer.freshDialogs,

    }
}

const setProfile = actionsProfile.setProfile

export const NavigateMenuContainer = connect(mapStateToProps,  {setProfile})(NavigateMenu)

import React from "react";
import {connect} from "react-redux";
import {setProfile} from "../DataBases/Reducers/ProfileInfoReducer";
import NavigateMenu from "./NavigateMenu";





let mapStateToProps = state => {
    return {
        freshDialogs: state.messageReducer.freshDialogs,

    }
}

export const NavigateMenuContainer = connect(mapStateToProps,  {setProfile})(NavigateMenu)

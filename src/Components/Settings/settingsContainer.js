import React from "react";
import {connect} from "react-redux";
import Settings from "./settings";
import {putProfileInfoThunk, setTemps} from "../DataBases/Reducers/ProfileInfoReducer";
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {getUserAllMessagesThunk} from "../DataBases/Reducers/MessagesReducer";
import {authRedirect} from "../Common/redirectToLogin";
import DialogLists from "../Dialog/MainDialogPage/DialogList";

let mapStateToProps = state => {
    return {
        temps: state.profileInfoReducer.temps,
        settings: state.profileInfoReducer.logged,
        id: state.profileInfoReducer.logged.id,
    }
}




// export const SettingsContainer = connect(mapStateToProps, {setTemps, putProfileInfoThunk})(Settings)
// export const SettingsForm = reduxForm({ form: 'settings', enableReinitialize : true})(SettingsContainer)


export const SettingsForm = compose(
    connect(mapStateToProps, {setTemps, putProfileInfoThunk}),
    reduxForm({ form: 'settings', enableReinitialize : true}),
    authRedirect
)(Settings)

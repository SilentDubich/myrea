import {connect} from "react-redux";
import DialogLists from "./DialogList";
import {getUserAllMessagesThunk} from "../../DataBases/Reducers/MessagesReducer";
import {authRedirect} from "../../Common/redirectToLogin";
import {compose} from "redux";
import {AppStateType} from "../../DataBases/Redux/Store";
import {ComponentType} from "react";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.messageReducer.Dialogs,
        me: state.profileInfoReducer.logged,
        tempSearch: state.messageReducer.tempSearch
    }
}


const DialogsListContainer = compose<ComponentType>(
    connect(mapStateToProps, {getUserAllMessagesThunk}),
    authRedirect
)(DialogLists)

export default DialogsListContainer

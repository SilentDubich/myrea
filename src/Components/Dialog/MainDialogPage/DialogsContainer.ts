import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {actionsMessages} from "../../DataBases/Reducers/MessagesReducer";
import {AppStateType} from "../../DataBases/Redux/Store";


let mapStateToProps = (state: AppStateType) => {
    return {
        tempSearch: state.messageReducer.tempSearch
    }
}

const updateSearchText = actionsMessages.updateSearchText

export const DialogContainer = connect(mapStateToProps, {updateSearchText})(Dialogs)

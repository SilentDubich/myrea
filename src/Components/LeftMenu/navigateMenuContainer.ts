import {connect} from "react-redux";
import {actionsProfile} from "../DataBases/Reducers/ProfileInfoReducer";
import {NavigateMenu} from "./NavigateMenu";
import {AppStateType} from "../DataBases/Redux/Store";


let mapStateToProps = (state: AppStateType) => {
    return {
        freshDialogs: state.messageReducer.freshDialogs,
    }
}

const setProfile = actionsProfile.setProfile

export const NavigateMenuContainer = connect(mapStateToProps,  {setProfile})(NavigateMenu)

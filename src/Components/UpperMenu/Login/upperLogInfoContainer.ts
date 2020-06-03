import {connect} from "react-redux";
import {UpperLogInfo} from "./UpperLogInfo";
import {postLogOutThunk} from "../../DataBases/Reducers/LoginReducer";
import emptyPhoto from "../../../img/Avatars/nullPhoto.jpg"
import {AppStateType} from "../../DataBases/Redux/Store";


let mapStateToProps = (state: AppStateType) =>{
    return {
        didLog: state.loginReducer.isLogged,
        Avatar: state.profileInfoReducer.logged.photos.large || emptyPhoto,
    }
};



export const UpperLogInfoContainer = connect(mapStateToProps, {postLogOutThunk})(UpperLogInfo)

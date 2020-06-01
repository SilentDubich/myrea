import {connect} from "react-redux";
import {setAnotherProfile} from "../../DataBases/Reducers/ProfileInfoReducer";
import {FriendList} from "./Friend";
import {AppStateType} from "../../DataBases/Redux/Store";


let mapStateToProps = (state: AppStateType) => {
    return {
        friends: state.friendsReducer.friends,
        myId: state.profileInfoReducer.logged.userId
    }
}


export const FriendListContainer = connect(mapStateToProps, {setAnotherProfile})(FriendList)

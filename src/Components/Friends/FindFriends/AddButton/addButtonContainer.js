import {addFriendCreation, deleteFriendCreation} from "../../../DataBases/Reducers/FriendsReducer";
import {connect} from "react-redux";
import Users from "../UserDecor/findFriends";
import AddButton from "./addButton";

let mapStateToProps = state => {
    // debugger
    return{
        state: state.usersReducer
    }
};

let mapDispatchToProps = dispatch => {
    return{
        addFriend: (id, name, avatar) => {
            dispatch(addFriendCreation(id, name, avatar))
        },
        deleteFriend: () => {
            dispatch(deleteFriendCreation())
        }
    }
};



const AddButtonContainer = connect(mapStateToProps, mapDispatchToProps)(AddButton);

export default AddButtonContainer

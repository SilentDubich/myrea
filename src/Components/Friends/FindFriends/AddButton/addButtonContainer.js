import {addFriendCreation, deleteFriendCreation} from "../../../DataBases/Reducers/FriendsReducer";
import {connect} from "react-redux";
import Users from "../UserDecor/findFriends";
import AddButton from "./addButton";
import {addUserCreation, deleteUserCreation, switchIsFetchingCreation} from "../../../DataBases/Reducers/UserReducer";

let mapStateToProps = state => {
    // debugger
    return{
        state: state.usersReducer
    }
};

let mapDispatchToProps = dispatch => {
    // debugger
    return{
        addFriend: (id, name, avatar, add) => {
            dispatch(addFriendCreation(id, name, avatar, add));
        },
        deleteFriend: id => {
            dispatch(deleteFriendCreation(id));
        },
        addUser: id => {
            dispatch(addUserCreation(id))
        },
        deleteUser: id => {
            dispatch(deleteUserCreation(id))
        },

    }
};



const AddButtonContainer = connect(mapStateToProps, mapDispatchToProps)(AddButton);

export default AddButtonContainer

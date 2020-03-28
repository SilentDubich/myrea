import {addFriend, deleteFriend} from "../../../DataBases/Reducers/FriendsReducer";
import {connect} from "react-redux";
import AddButton from "./addButton";
import {
    addUser,
    addUserThunk,
    deleteUser,
    deleteUserThunk,
    switchIsAddButton
} from "../../../DataBases/Reducers/UserReducer";

let mapStateToProps = state => {
    // debugger
    return {
        state: state.usersReducer,
        addButton: state.usersReducer.addButton
    }
};


const AddButtonContainer = connect(mapStateToProps,
    {
        addFriend, deleteFriend, addUser,
        deleteUser, switchIsAddButton, addUserThunk,
        deleteUserThunk
    }
)
(AddButton);

export default AddButtonContainer

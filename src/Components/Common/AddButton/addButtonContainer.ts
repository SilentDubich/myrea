import {connect} from "react-redux";
import {AddButton} from "./addButton";
import {
    addUserThunk,
    deleteUserThunk,
    actionsUser
} from "../../DataBases/Reducers/UserReducer";
import {AppStateType} from "../../DataBases/Redux/Store";


const switchIsAddButton = actionsUser.switchIsAddButton


let mapStateToProps = (state: AppStateType) => {
    // debugger
    return {
        state: state.usersReducer,
        addButton: state.usersReducer.addButton,
        isFetching: state.usersReducer.isFetching,
    }
};


const AddButtonContainer = connect(mapStateToProps,
    {
        addUserThunk,
        deleteUserThunk
    }
)
(AddButton);

export default AddButtonContainer

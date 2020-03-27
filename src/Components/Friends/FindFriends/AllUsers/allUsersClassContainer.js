import React from "react";
import {connect} from "react-redux";
import Users from "../UserDecor/findFriends";
import AllUsersClass from "./allUsersClass";
import {
    setTotalUsers,
    setUsers, switchIsButton, switchIsFetching,
} from "../../../DataBases/Reducers/UserReducer";
import {updatePostTextCreation} from "../../../DataBases/Reducers/PostsReducer";



let mapStateToProps = (state) => {
    // debugger
    return {
        state: state.usersReducer
    }
};



const AllUsersClassContainer = connect(mapStateToProps, {setUsers, setTotalUsers, switchIsButton, switchIsFetching})(AllUsersClass);

export default AllUsersClassContainer

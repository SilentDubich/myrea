import React from "react";
import {connect} from "react-redux";
import Users from "../UserDecor/findFriends";
import AllUsersClass from "./allUsersClass";
import {setUsersCreation} from "../../../DataBases/Reducers/UserReducer";
import {updatePostTextCreation} from "../../../DataBases/Reducers/PostsReducer";



let mapStateToProps = (state) => {
    // debugger
    return{
        state: state.usersReducer
    }
};

let mapDispatchToProps = dispatch => {
    return{
        setUsers: users => {
            dispatch(setUsersCreation(users))
        }
    }
};



const AllUsersClassContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsersClass);

export default AllUsersClassContainer

import React from "react";
import {connect} from "react-redux";
import {postCreation, updatePostTextCreation} from "../../../DataBases/Reducers/PostsReducer";
import Users from "./findFriends";
import {addFriendCreation, deleteFriendCreation} from "../../../DataBases/Reducers/FriendsReducer";


// function UsersContainer(props) {
//     return(
//         <div>
//             allusers
//         </div>
//     )
// }

let mapStateToProps = (state) => {
    // debugger
    return{
        state: state.usersReducer
    }
};

let mapDispatchToProps = dispatch => {
    return{
        addFriend: text => {
            dispatch(addFriendCreation())
        },
        deleteFriend: () => {
            dispatch(deleteFriendCreation())
        }
    }
};



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer

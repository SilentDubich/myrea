import React from "react";
import Content from "../../../../CssModules/content.module.css";
import UsersContainer from "../UserDecor/FindFriendsContainer";
import Users from "../UserDecor/findFriends";
import Dialogs from "../../../Dialog/MainDialogPage/Dialogs";
import * as axios from "axios";
import {setUsersCreation} from "../../../DataBases/Reducers/UserReducer";


function AllUsers(props) {
    debugger

    if (props.state.usersReducer.users.length === 0){
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
            props.dispatch(setUsersCreation(response.data.items))
        })
    }

    let all = props.state.usersReducer.users.map(us => <Users id={us.id} avatar={us.photos.small} name={us.name}/>);
    debugger
    return(
        <div className={Content.content__menu_decorationBlocks}>
            {all}
        </div>
    )
}

export default AllUsers

import React from "react";
import Content from "../../../CssModules/content.module.css";
import UsersContainer from "./FindFriendsContainer";
import Users from "./findFriends";
import Dialogs from "../../Dialog/MainDialogPage/Dialogs";


function AllUsers(props) {
    debugger
    let all = props.state.usersReducer.users.map(us => <Users id={us.id} name={us.name} avatar={us.photos.small}/>);

    return(
        <div className={Content.content__menu_decorationBlocks}>
            {/*<Users/>*/}
            {all}
        </div>
    )
}

export default AllUsers
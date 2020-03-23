import React from "react";
import Content from "../../../../CssModules/content.module.css";
import UsersContainer from "../UserDecor/FindFriendsContainer";
import Users from "../UserDecor/findFriends";
import Dialogs from "../../../Dialog/MainDialogPage/Dialogs";
import * as axios from "axios";
import {setUsersCreation} from "../../../DataBases/Reducers/UserReducer";


class AllUsersClass extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.state.usersReducer.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.dispatch(setUsersCreation(response.data.items))
                })
        }
    }

    render() {
        return (
            <div className={Content.content__menu_decorationBlocks}>
                {this.props.state.usersReducer.users.map(us => <Users id={us.id} avatar={us.photos.small} name={us.name}/>)}
            </div>
        )
    }
}

export default AllUsersClass

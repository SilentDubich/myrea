import React from "react";
import Content from "../../../../CssModules/content.module.css";
import UsersContainer from "../UserDecor/FindFriendsContainer";
import Users from "../UserDecor/findFriends";
import Dialogs from "../../../Dialog/MainDialogPage/Dialogs";
import * as axios from "axios";
import {setUsersCreation} from "../../../DataBases/Reducers/UserReducer";
import FriendsSearch from "../../myFriends/FriendsSearch";
import UserSearch from "./usersSearch";
import Pages from "./PagesButtons/pages";
import {PagesContainer} from "./PagesButtons/pagesContainer";
import Preloader from "../../../Pre-loaders/Preloader";
import Preloaders from '../../../../CssModules/Preloader/Preloaders.module.css'
import {API} from "../../../DataBases/API/API";


class AllUsersClass extends React.Component {
    componentDidMount() {
        if (this.props.state.users.length === 0) {
            this.props.getUsersThunk(this.props.state.pageSize, this.props.state.currentPage)
        }
    }

    render() {
        // debugger
        return (
            <div className={`${Content.content__menu_decorationBlocks} `}>
                <UserSearch/>
                <PagesContainer/>
                {this.props.state.isFetching ? <Preloader className={Preloaders.Preloader__Opacity}/> : null}
                {this.props.state.users.map(us => <UsersContainer
                    id={us.id}
                    avatar={us.photos.small}
                    name={us.name}
                    follow={us.followed}
                />)}
            </div>
        )
    }
}

export default AllUsersClass

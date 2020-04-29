import React, {useEffect} from "react";
import Content from "../../../../CssModules/content.module.css";
import UsersContainer from "../UserDecor/FindFriendsContainer";
import UserSearch from "./usersSearch";
import {PagesContainer} from "./PagesButtons/pagesContainer";
import Preloader from "../../../Common/Preloader";
import Preloaders from '../../../../CssModules/Preloader/Preloaders.module.css'

function AllUsersClass (props) {

    useEffect(() => {
        props.getUsersThunk(props.state.pageSize, props.state.currentPage)
    }, [props.state.users === 0])

        return (
            <div className={`${Content.content__menu_decorationBlocks} `}>
                <UserSearch getUsersThunk={props.getUsersThunk} updateSearchText={props.updateSearchText} tempSearch={props.tempSearch}/>
                <PagesContainer/>
                {props.state.isFetching ? <Preloader className={Preloaders.Preloader__Opacity}/> : null}
                {props.state.users.map(us => <UsersContainer
                    key={us.id}
                    id={us.id}
                    avatar={us.photos.small}
                    name={us.name}
                    follow={us.followed}
                />)}
            </div>
        )
}

export default AllUsersClass

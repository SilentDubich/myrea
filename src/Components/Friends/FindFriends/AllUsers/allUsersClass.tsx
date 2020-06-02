import React, {FC, useEffect} from "react";
import Content from "../../../../CssModules/content.module.css";
import UsersContainer from "../UserDecor/FindFriendsContainer";
import {UserSearch} from "./usersSearch";
import {PagesContainer} from "./PagesButtons/pagesContainer";
import Preloader from "../../../Common/Preloader";
import Preloaders from '../../../../CssModules/Preloader/Preloaders.module.css'
import {DefaultStateType} from "../../../DataBases/Reducers/UserReducer";
import {UserType} from "../../../Common/types";

type mapStateToPropsType = {
    stateUsers: DefaultStateType
    tempSearch: string
}

type mapDispatchType = {
    getUsersThunk: (pageSize: number, currentPage: number, user?: string) => void
    updateSearchText: (text: string) => void
}

type PropsType = mapStateToPropsType & mapDispatchType

export const AllUsersClass:FC<PropsType> = (props) => {

    useEffect(() => {
        props.getUsersThunk(props.stateUsers.pageSize, props.stateUsers.currentPage)
    }, [props.stateUsers.users.length === 0])

        return (
            <div className={`${Content.content__menu_decorationBlocks} `}>
                <UserSearch getUsersThunk={props.getUsersThunk} updateSearchText={props.updateSearchText} tempSearch={props.tempSearch}/>
                <PagesContainer/>
                {props.stateUsers.isFetching ? <Preloader className={Preloaders.Preloader__Opacity}/> : null}
                {props.stateUsers.users.map(us => <UsersContainer
                    key={us.id}
                    id={us.id}
                    avatar={us.photos.small}
                    name={us.name}
                    follow={us.followed}
                />)}
            </div>
        )
}

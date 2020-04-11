import React, {useEffect} from "react";
import Content from "../../../../CssModules/content.module.css";
import UsersContainer from "../UserDecor/FindFriendsContainer";
import UserSearch from "./usersSearch";
import {PagesContainer} from "./PagesButtons/pagesContainer";
import Preloader from "../../../Pre-loaders/Preloader";
import Preloaders from '../../../../CssModules/Preloader/Preloaders.module.css'

function AllUsersClass (props) {
    useEffect(() => {
        props.getUsersThunk(props.state.pageSize, props.state.currentPage)
    }, [props.state.users === 0])

        // debugger
        return (
            <div className={`${Content.content__menu_decorationBlocks} `}>
                <UserSearch/>
                <PagesContainer/>
                {props.state.isFetching ? <Preloader className={Preloaders.Preloader__Opacity}/> : null}
                {props.state.users.map(us => <UsersContainer
                    id={us.id}
                    avatar={us.photos.small}
                    name={us.name}
                    follow={us.followed}
                />)}
            </div>
        )
}
// class AllUsersClass extends React.Component {
//     componentDidMount() {
//         if (this.props.state.users.length === 0) {
//             this.props.getUsersThunk(this.props.state.pageSize, this.props.state.currentPage)
//         }
//     }
//
//     render() {
//         // debugger
//         return (
//             <div className={`${Content.content__menu_decorationBlocks} `}>
//                 <UserSearch/>
//                 <PagesContainer/>
//                 {this.props.state.isFetching ? <Preloader className={Preloaders.Preloader__Opacity}/> : null}
//                 {this.props.state.users.map(us => <UsersContainer
//                     id={us.id}
//                     avatar={us.photos.small}
//                     name={us.name}
//                     follow={us.followed}
//                 />)}
//             </div>
//         )
//     }
// }

export default AllUsersClass

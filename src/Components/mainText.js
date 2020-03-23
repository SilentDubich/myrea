import React from "react";
import LeftMenu from "./LeftMenu/NavigateMenu";
import Objects from '../CssModules/DisplayView.module.css';
import ProfileCenterInfo from "./Profile/MainProfilePage/ProfileCenterInfo";
import Dialogs from "./Dialog/MainDialogPage/Dialogs";
import DialogPage from "./Dialog/MainDialogPage/DialogPage/DialogPage";
import {Route} from "react-router-dom"
import MyFriends from "./Friends/myFriends/myFriends";
import Users from "./Friends/FindFriends/findFriends";
import AllUsers from "./Friends/FindFriends/allUsers";


function Text(props) {
    let Profile = () => <ProfileCenterInfo
        dispatch={props.dispatch}
        state={props.state}
    />;
    let dialogs = () => <Dialogs
        dispatch={props.dispatch}
        state={props.state}
    />;

    let personDialog = () => <DialogPage
        dispatch={props.dispatch}
        state={props.state}
    />;

    let myFriends = () => <MyFriends/>;

    let allUsers = () => <AllUsers state={props.state}/>;

    return (
        // <BrowserRouter>
            <div className={`${Objects.main__displayGRid}`}>
                <div>
                    <LeftMenu/>
                </div>

                <div>
                    <Route exact path='/profile' render={Profile}/>
                    <Route exact path='/dialogs' render={dialogs}/>
                    <Route path={'/dialog'} render={personDialog}/>
                    <Route path={'/friends'} render={myFriends}/>
                    <Route path={'/users'} render={allUsers}/>
                </div>
            </div>
        // </BrowserRouter>
    )
}

export default Text
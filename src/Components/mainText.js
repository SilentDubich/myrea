import React from "react";
import LeftMenu from "./LeftMenu/NavigateMenu";
import Objects from '../CssModules/DisplayView.module.css';
import ProfileCenterInfo from "./Profile/MainProfilePage/ProfileCenterInfo";
import Dialogs from "./Dialog/MainDialogPage/Dialogs";
import DialogPage from "./Dialog/MainDialogPage/DialogPage/DialogPage";
import {Route} from "react-router-dom"
import MyFriends from "./Friends/myFriends/myFriends";
import Users from "./Friends/FindFriends/UserDecor/findFriends";
import AllUsers from "../Trash/allUsers";
import AllUsersClass from "./Friends/FindFriends/AllUsers/allUsersClass";
import AllUsersClassContainer from "./Friends/FindFriends/AllUsers/allUsersClassContainer";
import {ProfileCenterInfoClassContainer} from "./Profile/MainProfilePage/ProfileCenterInfoClassContainer";
import {LoginPageContainer} from "./UpperMenu/Login/LoginPage/LoginPageContainer";
import {SettingsContainer} from "./Settings/settingsContainer";


function Text(props) {
    // let Profile = () => <ProfileCenterInfo
    //     dispatch={props.dispatch}
    //     state={props.state}
    // />;
    let Profile = () => <ProfileCenterInfoClassContainer
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

    let myFriends = () => <MyFriends state={props.state}/>;

    // let allUsers = () => <AllUsers dispatch={props.dispatch} state={props.state}/>;
    // let allUsers = () => <AllUsersClass dispatch={props.dispatch} state={props.state}/>;
    let allUsers = () => <AllUsersClassContainer dispatch={props.dispatch} state={props.state}/>;
    let loginPage = () => <LoginPageContainer/>;
    let settingsPage = () => <SettingsContainer/>

    return (
        // <BrowserRouter>
            <div className={`${Objects.main__displayGRid}`}>
                <div>
                    <LeftMenu dispatch={props.dispatch}
                              state={props.state}/>
                </div>

                <div>
                    <Route path='/profile' render={Profile}/>
                    <Route path='/dialogs' render={dialogs}/>
                    <Route path='/dialog' render={personDialog}/>
                    <Route path='/friends' render={myFriends}/>
                    <Route path='/users' render={allUsers}/>
                    <Route path='/login' render={loginPage}/>
                    <Route path='/settings' render={settingsPage}/>
                </div>
            </div>
        // </BrowserRouter>
    )
}

export default Text

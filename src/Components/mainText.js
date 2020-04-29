import React, {Suspense} from "react";
import NavigateMenu from "./LeftMenu/NavigateMenu";
import Objects from '../CssModules/DisplayView.module.css';
import {Redirect, Route, Switch} from "react-router-dom"
import {AllUsersClassContainer} from "./Friends/FindFriends/AllUsers/allUsersClassContainer";
import {ProfileCenterInfoClassContainer} from "./Profile/MainProfilePage/ProfileCenterInfoClassContainer";
import {LoginReduxForm} from "./UpperMenu/Login/LoginPage/LoginPageContainer";
import {SettingsForm} from "./Settings/settingsContainer";
import {DialogPageContainer} from "./Dialog/MainDialogPage/DialogPage/DialogPageContainer";
import {DialogContainer} from "./Dialog/MainDialogPage/DialogsContainer";
import MyFriends from "./Friends/myFriends/myFriends";
import {NavigateMenuContainer} from "./LeftMenu/navigateMenuContainer";


function Text(props) {
    let Profile = () => <ProfileCenterInfoClassContainer/>;
    let dialogs = () => <DialogContainer/>;
    let personDialog = () => <DialogPageContainer/>;
    let myFriends = () => <MyFriends/>;
    let allUsers = () => <AllUsersClassContainer/>;
    let loginPage = () => <LoginReduxForm/>;
    let settingsPage = () => <SettingsForm/>
    return (
        <div className={`${Objects.main__displayGRid}`}>
            <div>
                <NavigateMenuContainer/>
            </div>
            <div>
                <Switch>
                    <Route path='/dialog/:userID' render={personDialog}/>
                    <Route path='/profile' render={Profile}/>
                    <Route path='/dialogs' render={dialogs}/>
                    <Route path='/friends' render={myFriends}/>
                    <Route path='/users' render={allUsers}/>
                    <Route path='/login' render={loginPage}/>
                    <Route path='/settings' render={settingsPage}/>
                    <Redirect from="/" to="/profile"/>
                </Switch>
            </div>
        </div>
    )
}

export default Text

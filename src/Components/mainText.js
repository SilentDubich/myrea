import React from "react";
import LeftMenu from "./LeftMenu/NavigateMenu";
import Objects from '../CssModules/DisplayView.module.css';
import ProfileCenterInfo from "../Trash/ProfileCenterInfo";
import Dialogs from "./Dialog/MainDialogPage/Dialogs";
import DialogPage from "./Dialog/MainDialogPage/DialogPage/DialogPage";
import {NavLink, Route} from "react-router-dom"
import MyFriends from "./Friends/myFriends/myFriends";
import Users from "./Friends/FindFriends/UserDecor/findFriends";
import AllUsers from "../Trash/allUsers";
import AllUsersClass from "./Friends/FindFriends/AllUsers/allUsersClass";
import AllUsersClassContainer from "./Friends/FindFriends/AllUsers/allUsersClassContainer";
import {ProfileCenterInfoClassContainer} from "./Profile/MainProfilePage/ProfileCenterInfoClassContainer";
import {LoginPageContainer, LoginReduxForm} from "./UpperMenu/Login/LoginPage/LoginPageContainer";
import {SettingsContainer, SettingsForm} from "./Settings/settingsContainer";
import {DialogPageContainer} from "./Dialog/MainDialogPage/DialogPage/DialogPageContainer";
import {DialogContainer} from "./Dialog/MainDialogPage/DialogsContainer";


function Text(props) {
    let Profile = () => <ProfileCenterInfoClassContainer
        dispatch={props.dispatch}
        state={props.state}
    />;
    // container
    // let dialogs = () => <Dialogs/>;
    let dialogs = () => <DialogContainer/>;

    let personDialog = () => <DialogPageContainer/>;
    let myFriends = () => <MyFriends state={props.state}/>;
    let allUsers = () => <AllUsersClassContainer dispatch={props.dispatch} state={props.state}/>;
    let loginPage = () => <LoginReduxForm/>;
    let settingsPage = () => <SettingsForm initialValues={initial()}/>
    let initial = () => {
        return {
            ...props.state.profileInfoReducer.logged,
        }
    }

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
                    <Route exact path='/dialog/:userID' render={personDialog}/>
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

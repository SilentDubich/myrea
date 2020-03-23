import React from "react";
import Displays from '../../../CssModules/DisplayView.module.css'
import AvatarPhoto from "../Avatar/Avatar";
import FriendList from "../FriendList/Friend";
import Subscribes from "../Subscribes/SubscribeList";
import MainInfo from "../MainInfo/nameAndAbout";
import PostRedactor from "../PostRedactor/postRedactor";
import MyPosts from "../MyPosts/posts";
import Text from "../../mainText";
import PostRedactorContainer from "../PostRedactor/PostRedactorContainer";
import StoreContext from "../../StoreContext";

function ProfileCenterInfo(props) {
    return (
        <div className={Displays.inside_ContentProfile__displayFlex}>
            <div className={Displays.inside_ProfileCenter__FlexProportion}>
                <AvatarPhoto
                    state={props.state}
                />
                <FriendList
                    dispatch={props.dispatch}
                    state={props.state}
                />
                <Subscribes
                    dispatch={props.dispatch}
                    state={props.state}
                />
            </div>
            <div className={Displays.inside_ProfileRight__FlexProportion}>
                <MainInfo
                    state={props.state}
                />
                <PostRedactorContainer/>
                <MyPosts
                    dispatch={props.dispatch}
                    state={props.state}
                />
            </div>
        </div>
    )
}

export default ProfileCenterInfo
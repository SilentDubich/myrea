import React from "react";
import Displays from '../../../CssModules/DisplayView.module.css'
import AvatarPhoto from "../Avatar/Avatar";
import FriendList from "../FriendList/Friend";
import Subscribes from "../Subscribes/SubscribeList";
import MainInfo from "../MainInfo/nameAndAbout";
import MyPosts from "../../../Trash/posts";
import PostRedactorContainer from "../PostRedactor/PostRedactorContainer";

function ProfileCenterInfo(props) {
    // debugger
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

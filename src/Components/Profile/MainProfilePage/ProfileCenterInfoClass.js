import React from "react";
import * as axios from "axios";
import Displays from "../../../CssModules/DisplayView.module.css";
import AvatarPhoto from "../Avatar/Avatar";
import FriendList from "../FriendList/Friend";
import Subscribes from "../Subscribes/SubscribeList";
import MainInfo from "../MainInfo/nameAndAbout";
import PostRedactorContainer from "../PostRedactor/PostRedactorContainer";
import MyPosts from "../../../Trash/posts";
import {PostsClassContainer} from "../MyPosts/postsClassContainer";


class ProfileCenterInfoClass extends React.Component {

    componentDidMount() {

    };


    render() {
        // debugger
        return(
            <div className={Displays.inside_ContentProfile__displayFlex}>
                <div className={Displays.inside_ProfileCenter__FlexProportion}>
                    <AvatarPhoto
                        avatar={this.props.currentProfile.Avatar}
                        updatePhoto={this.props.postProfilePhotoThunk}
                        id={this.props.currentProfile.id}
                    />
                    <FriendList
                        dispatch={this.props.dispatch}
                        state={this.props.state}
                    />
                    <Subscribes
                        dispatch={this.props.dispatch}
                        state={this.props.state}
                    />
                </div>
                <div className={Displays.inside_ProfileRight__FlexProportion}>
                    <MainInfo
                        name={this.props.currentProfile.Name}
                        status={this.props.currentProfile.Status}
                        aboutMe={this.props.currentProfile.AboutMe}
                    />
                    <PostRedactorContainer/>
                    {/*<MyPosts*/}
                    {/*    dispatch={this.props.dispatch}*/}
                    {/*    state={this.props.state}*/}
                    {/*/>*/}
                    <PostsClassContainer
                        dispatch={this.props.dispatch}
                        state={this.props.state}
                    />
                </div>
            </div>
        )
    }
}

export default ProfileCenterInfoClass

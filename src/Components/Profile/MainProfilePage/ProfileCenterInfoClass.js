import React, {useEffect, useState} from "react";
import Displays from "../../../CssModules/DisplayView.module.css";
import AvatarPhoto from "../Avatar/Avatar";
import FriendList from "../FriendList/Friend";
import Subscribes from "../Subscribes/SubscribeList";
import MainInfo from "../MainInfo/nameAndAbout";
import PostRedactorContainer from "../PostRedactor/PostRedactorContainer";
import {PostsClassContainer} from "../MyPosts/postsClassContainer";
import Preloader from "../../Common/Preloader";
import {putNewDialogThunk} from "../../DataBases/Reducers/MessagesReducer";
import {updatePhotoSize, uploadPhoto} from "../../DataBases/Reducers/ProfileInfoReducer";


function ProfileCenterInfoClass(props) {
    let [fetch, setFetch] = useState(props.isFetching)
    let [follow, setFollow] = useState(props.followed)
    useEffect(() => {
        setFollow(props.followed)
    }, [props.followed])
    useEffect(() => {
        setFetch(props.isFetching)
    }, [props.isFetching])
// debugger
    return (
        <div>
            {fetch ? <Preloader/> : <div className={Displays.inside_ContentProfile__displayFlex}>
                <div className={Displays.inside_ProfileCenter__FlexProportion}>
                    <AvatarPhoto
                        avatar={props.currentProfile.Avatar}
                        updatePhoto={props.postProfilePhotoThunk}
                        id={props.currentProfile.id}
                        name={props.currentProfile.FullName}
                        myProfile={props.myProfile}
                        putNewDialogThunk={props.putNewDialogThunk}
                        followed={follow}
                        uploadPhoto={props.uploadPhoto}
                        updatePhotoSize={props.updatePhotoSize}
                        tempPhoto={props.tempPhoto}
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
                        name={props.currentProfile.FullName}
                        status={props.currentProfile.Status}
                        aboutMe={props.currentProfile.AboutMe}
                    />
                    <PostRedactorContainer/>
                    <PostsClassContainer/>
                </div>
            </div>
            }
        </div>
    )
}

export default ProfileCenterInfoClass

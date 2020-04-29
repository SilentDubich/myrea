import React, {useEffect, useState} from "react";
import Displays from "../../../CssModules/DisplayView.module.css";
import AvatarPhoto from "../Avatar/Avatar";
import Subscribes from "../Subscribes/SubscribeList";
import MainInfo from "../MainInfo/nameAndAbout";
import PostRedactorContainer from "../PostRedactor/PostRedactorContainer";
import {PostsClassContainer} from "../MyPosts/postsClassContainer";
import Preloader from "../../Common/Preloader";
import {FriendListContainer} from "../FriendList/friendContainer";


function ProfileCenterInfoClass(props) {
    let [follow, setFollow] = useState(props.followed)
    let [fetch, setFetch] = useState(props.isFetching)

    useEffect(() => {
        setFollow(props.followed)
    }, [props.followed])

    useEffect(() => {
        setFetch(props.isFetching)
    }, [props.isFetching])

    if (fetch) return <Preloader/>

    return (
        <div>
            <div className={Displays.inside_ContentProfile__displayFlex}>
                <div className={Displays.inside_ProfileCenter__FlexProportion}>
                    <AvatarPhoto
                        avatar={props.currentProfile.photos.large}
                        updatePhoto={props.postProfilePhotoThunk}
                        id={props.currentProfile.userId}
                        name={props.currentProfile.fullName}
                        myProfile={props.myProfile}
                        putNewDialogThunk={props.putNewDialogThunk}
                        followed={follow}
                        uploadPhoto={props.uploadPhoto}
                        updatePhotoSize={props.updatePhotoSize}
                        tempPhoto={props.tempPhoto}
                    />
                    <FriendListContainer/>
                    <Subscribes subscribe={props.subscribe}/>
                </div>
                <div className={Displays.inside_ProfileRight__FlexProportion}>
                    <MainInfo
                        name={props.currentProfile.fullName}
                        status={props.currentProfile.status}
                        aboutMe={props.currentProfile.aboutMe}
                    />
                    <PostRedactorContainer/>
                    <PostsClassContainer/>
                </div>
            </div>

        </div>
    )
}

export default ProfileCenterInfoClass

import React, {FC, useEffect, useState} from "react";
import Displays from "../../../CssModules/DisplayView.module.css";
import AvatarPhoto from "../Avatar/Avatar";
import {MainInfo} from "../MainInfo/nameAndAbout";
import PostRedactorContainer from "../PostRedactor/PostRedactorContainer";
import {PostsClassContainer} from "../MyPosts/postsClassContainer";
import Preloader from "../../Common/Preloader";
import {FriendListContainer} from "../FriendList/friendContainer";
import {PostType, ProfileType} from "../../Common/types";



type MapStatePropsType = {
    currentProfile: ProfileType
    myProfilePosts: PostType
    isFetching: boolean
    myProfile: boolean
    followed: boolean
    subscribe: any
}

type MapDispatchPropsType = {
    getProfile: (user: ProfileType, who: string) => void
    postProfilePhotoThunk: (formData: File, id: number) => void
    putNewDialogThunk: (id: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

export const ProfileCenterInfoClass:FC<PropsType> = (props) => {
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
                    />
                    {props.myProfile && <FriendListContainer/>}
                    {/*{props.myProfile && <Subscribes subscribe={props.subscribe}/>}*/}
                </div>
                <div className={Displays.inside_ProfileRight__FlexProportion}>
                    <MainInfo
                        name={props.currentProfile.fullName}
                        status={props.currentProfile.status}
                        aboutMe={props.currentProfile.aboutMe}
                        skills={props.currentProfile.lookingForAJobDescription}
                        search={props.currentProfile.lookingForAJob}
                        contacts={props.currentProfile.contacts}
                    />
                    {props.myProfile && <PostRedactorContainer/>}
                    {props.myProfile && <PostsClassContainer/>}
                </div>
            </div>
        </div>
    )
}
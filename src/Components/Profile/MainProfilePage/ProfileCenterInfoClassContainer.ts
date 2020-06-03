import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {actionsProfile, postProfilePhotoThunk,} from "../../DataBases/Reducers/ProfileInfoReducer";
import {ProfileCenterInfoClass} from "./ProfileCenterInfoClass";
import {authRedirect} from "../../Common/redirectToLogin";
import {compose} from "redux";
import {putNewDialogThunk} from "../../DataBases/Reducers/MessagesReducer";
import {AppStateType} from "../../DataBases/Redux/Store";


let mapStateToProps = (state: AppStateType) => {
    return {
        currentProfile: state.profileInfoReducer.myProfile ?
            state.profileInfoReducer.logged : state.profileInfoReducer.currentProfile,
        myProfilePosts: state.postsReducer.Posts,
        isFetching: state.usersReducer.isFetching,
        myProfile: state.profileInfoReducer.myProfile,
        followed: state.profileInfoReducer.followed,
        subscribe: state.subscribesReducer
    }
};

const getProfile = actionsProfile.getProfile

export const ProfileCenterInfoClassContainer = compose<ComponentType>(
    connect(mapStateToProps, {getProfile, postProfilePhotoThunk, putNewDialogThunk}),
    authRedirect
)(ProfileCenterInfoClass)

import React from "react";
import {connect} from "react-redux";
import {
    getProfile,
    postProfilePhotoThunk,
} from "../../DataBases/Reducers/ProfileInfoReducer";
import ProfileCenterInfoClass from "./ProfileCenterInfoClass";
import {authRedirect} from "../../Common/redirectToLogin";
import {compose} from "redux";
import {putNewDialogThunk} from "../../DataBases/Reducers/MessagesReducer";


let mapStateToProps = state => {
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


export const ProfileCenterInfoClassContainer = compose(
    connect(mapStateToProps, {getProfile, postProfilePhotoThunk, putNewDialogThunk}),
    authRedirect
)(ProfileCenterInfoClass)

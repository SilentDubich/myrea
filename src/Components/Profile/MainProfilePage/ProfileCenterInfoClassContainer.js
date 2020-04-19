import React from "react";
import {connect} from "react-redux";
import {
    getProfile,
    postProfilePhotoThunk,
    updatePhotoSize,
    uploadPhoto
} from "../../DataBases/Reducers/ProfileInfoReducer";
import ProfileCenterInfoClass from "./ProfileCenterInfoClass";
import {authRedirect} from "../../redirect";
import {compose} from "redux";
import {putNewDialogThunk} from "../../DataBases/Reducers/MessagesReducer";


let mapStateToProps = state => {
    return {
        currentProfile: state.profileInfoReducer.myProfile ?
            state.profileInfoReducer.logged : state.profileInfoReducer.currentProfile,
        myProfilePosts: state.postsReducer.Posts,
        myProfile: state.profileInfoReducer.myProfile,
        isFetching: state.usersReducer.isFetching,
        followed: state.profileInfoReducer.currentProfile.followed,
        tempPhoto: state.profileInfoReducer.photo

    }
};

// let redirect = authRedirect(ProfileCenterInfoClass)

export const ProfileCenterInfoClassContainer = compose(
    connect(mapStateToProps, {getProfile, postProfilePhotoThunk, putNewDialogThunk, uploadPhoto, updatePhotoSize}),
    authRedirect
)(ProfileCenterInfoClass)
// connect(mapStateToProps, {getProfile})(redirect);

import React from "react";
import {connect} from "react-redux";
import {getProfile, postProfilePhotoThunk} from "../../DataBases/Reducers/ProfileInfoReducer";
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

    }
};

// let redirect = authRedirect(ProfileCenterInfoClass)

export const ProfileCenterInfoClassContainer = compose(
    connect(mapStateToProps, {getProfile, postProfilePhotoThunk, putNewDialogThunk}),
    authRedirect
)(ProfileCenterInfoClass)
// connect(mapStateToProps, {getProfile})(redirect);

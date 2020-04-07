import React from "react";
import {connect} from "react-redux";
import {getProfile, postProfilePhotoThunk} from "../../DataBases/Reducers/ProfileInfoReducer";
import ProfileCenterInfoClass from "./ProfileCenterInfoClass";
import {authRedirect} from "../../redirect";
import {compose} from "redux";


let mapStateToProps = state => {
    return {
        currentProfile: state.profileInfoReducer.myProfile ?
            state.profileInfoReducer.logged : state.profileInfoReducer.currentProfile,
        myProfilePosts: state.postsReducer.Posts,
        status: state.profileInfoReducer.logged.Status

    }
};

// let redirect = authRedirect(ProfileCenterInfoClass)

export const ProfileCenterInfoClassContainer = compose(
    connect(mapStateToProps, {getProfile, postProfilePhotoThunk}),
    authRedirect
)(ProfileCenterInfoClass)
// connect(mapStateToProps, {getProfile})(redirect);

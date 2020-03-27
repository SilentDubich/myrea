import React from "react";
import {connect} from "react-redux";
import {getProfile} from "../../DataBases/Reducers/ProfileInfoReducer";
import ProfileCenterInfoClass from "./ProfileCenterInfoClass";



let mapStateToProps = state => {
    return {
        currentProfile: state.profileInfoReducer.myProfile ?
            state.profileInfoReducer.logged : state.profileInfoReducer.currentProfile,
        myProfilePosts: state.postsReducer.Posts
    }
};


export const ProfileCenterInfoClassContainer = connect(mapStateToProps, {getProfile})(ProfileCenterInfoClass);

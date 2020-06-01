import React from "react";
import {connect} from "react-redux";
import {PostsClass} from "./postsClass";
import {deletePostCreation} from "../../DataBases/Reducers/PostsReducer";
import {AppStateType} from "../../DataBases/Redux/Store";


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profileInfoReducer.myProfile ? state.postsReducer.Posts : state.postsReducer.currentProfilePosts,
        current: state.profileInfoReducer.myProfile
    };

};

export const PostsClassContainer = connect(mapStateToProps, {deletePostCreation})(PostsClass);

import React from "react";
import {connect} from "react-redux";
import PostsClass from "./postsClass";
import {deletePostCreation} from "../../DataBases/Reducers/PostsReducer";


let mapStateToProps = state => {
    return {
        posts: state.profileInfoReducer.myProfile ? state.postsReducer.Posts : state.postsReducer.currentProfilePosts,
        current: state.profileInfoReducer.myProfile
    };

};

export const PostsClassContainer = connect(mapStateToProps, {deletePostCreation})(PostsClass);

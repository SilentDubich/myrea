import React from "react";
import {postCreation, updatePostTextCreation} from "../../DataBases/Reducers/PostsReducer";
import {PostRedactor} from "./postRedactor";
import {connect} from "react-redux";
import {AppStateType} from "../../DataBases/Redux/Store";


let mapStateToProps = (state: AppStateType) => {
    return{
        Temp: state.postsReducer.Temp[0].PostRedactor,
        currentProfile: state.profileInfoReducer.myProfile
    }
};

const PostRedactorContainer = connect(mapStateToProps, {updatePostTextCreation, postCreation})(PostRedactor);

export default PostRedactorContainer

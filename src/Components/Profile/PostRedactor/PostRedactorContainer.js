import React from "react";
import Content from "../../../CssModules/content.module.css";
import {postCreation, updatePostTextCreation} from "../../DataBases/Reducers/PostsReducer";
import PostRedactor from "./postRedactor";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        Temp: state.postsReducer.Temp[0].PostRedactor,
        currentProfile: state.profileInfoReducer.myProfile
    }
};

let mapDispatchToProps = dispatch => {
    return{
        currentText: text => {
            dispatch(updatePostTextCreation(text))
        },
        setPost: currentProfile => {
            dispatch(postCreation(currentProfile))
        }
    }
};

const PostRedactorContainer = connect(mapStateToProps, mapDispatchToProps)(PostRedactor);

export default PostRedactorContainer

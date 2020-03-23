import React from "react";
import Content from "../../../CssModules/content.module.css";
import {postCreation, updatePostTextCreation} from "../../DataBases/Reducers/PostsReducer";
import PostRedactor from "./postRedactor";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        Temp: state.postsReducer.Temp[0].PostRedactor
    }
};

let mapDispatchToProps = dispatch => {
    return{
        currentText: text => {
            dispatch(updatePostTextCreation(text))
        },
        setPost: () => {
            dispatch(postCreation())
        }
    }
};

const PostRedactorContainer = connect(mapStateToProps, mapDispatchToProps)(PostRedactor);

export default PostRedactorContainer

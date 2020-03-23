import React from "react";
import Content from "../../../CssModules/content.module.css";
import {postCreation, updatePostTextCreation} from "../../DataBases/Reducers/PostsReducer";
import PostRedactor from "./postRedactor";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

// function PostRedactorContainer(props) {
//     // debugger
//     // let Temp = props.state.postsReducer.Temp[0].PostRedactor;
//     // let setPost = () => {
//     //     props.dispatch(postCreation())
//     // };
//     //
//     // let currentText = text => {
//     //     // let text = ref.current.value;
//     //     props.dispatch(updatePostTextCreation(text))
//     // };
//
//     return (
//         <StoreContext.Consumer>
//             {
//             store => {
//                 let Temp = store.getState().postsReducer.Temp[0].PostRedactor;
//                 let setPost = () => {
//                     store.dispatch(postCreation())
//                 };
//
//                 let currentText = text => {
//                     // let text = ref.current.value;
//                     store.dispatch(updatePostTextCreation(text))
//                 };
//                 return <PostRedactor updateText={currentText} addPost={setPost} Temp={Temp} />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

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
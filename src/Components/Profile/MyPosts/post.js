import React from "react";
import Posts from "../../../CssModules/Profile/MyPosts/posts.module.css";
import Content from "../../../CssModules/content.module.css";
import {deletePostCreation} from "../../DataBases/Reducers/PostsReducer";
// import {deletePost} from "../../DataBases/State/State";


function NewPost(props) {

    let setDeletePost = () => {
        props.dispatch(deletePostCreation(props.id))
        // deletePost(props.id)
    };
    // debugger
    return(
        <div className={`${Content.content__menu_decorationBlocks}`}>
            <div className={`${Posts.display}`}>
                <img className={Posts.image} src={props.pict}/>
                <p className={`${Posts.name__marginLeft} ${Posts.name__Fonts}`}>{props.name}</p>
                <button title='Delete post' onClick={setDeletePost} className={`${Posts.deleteButton__marginLeft} ${Posts.deleteButton__decor}`}>
                    <span>&#10005;</span>
                </button>
            </div>
            <div className={`${Posts.post__margins}`}>
                <p className={`${Posts.mainDecor} ${Posts.borderBottom}`}>{props.text}</p>
                <p className={Posts.likeMainDecor}>Like: <span>{props.likes}</span></p>
            </div>
        </div>
    )
}

export default NewPost
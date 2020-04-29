import React from "react";
import NewPost from "./post";


function PostsClass(props) {
    let sortedPosts = props.posts
        .map(elem => <NewPost
            key={elem.id}
            id={elem.id}
            name={elem.name}
            text={elem.text}
            pict={elem.ava}
            likes={elem.likes}
            deletePost={props.deletePostCreation}
            current={props.current}
        />)
        .reverse();
    return (
        <div>
            {sortedPosts}
        </div>
    )
}

export default PostsClass

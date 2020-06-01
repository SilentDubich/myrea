import React, {FC} from "react";
import {NewPost} from "./post";
import {PostType, ProfileType} from "../../Common/types";

type MapStatePropsType = {
    posts: Array<PostType>
    current: boolean
    deletePostCreation: (id: any, currentProfile: any) => void
}

export const PostsClass:FC<MapStatePropsType> = (props) => {
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

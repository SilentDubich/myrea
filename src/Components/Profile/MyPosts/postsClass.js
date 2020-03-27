import React from "react";
import NewPost from "./post";


class PostsClass extends React.Component {
    render() {
        // debugger
        let sortedPosts = this.props.posts
        .map( elem => <NewPost
            id={elem.id}
            name={elem.name}
            text={elem.text}
            pict={elem.ava}
            likes={elem.likes}
            deletePost={this.props.deletePostCreation}
            current={this.props.current}
        />)
        .reverse();
        return(
            <div>
                {sortedPosts}
            </div>
        )
    }
}

export default PostsClass

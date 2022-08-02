import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()

    const addPost = () =>{
        let postText = postsElements.current.value;
    }

    return (
        <div className={classes.myPost}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>)
};

export default MyPosts;
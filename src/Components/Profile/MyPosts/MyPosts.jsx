import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value;
        // newPostElement.current.value = ''
        props.addPost(text);
        props.updateNewPostText('') // Не работает очистка поля после отправки поста
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }

    return (
        <div className={classes.myPost}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
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
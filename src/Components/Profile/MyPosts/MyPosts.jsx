import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let state = props.store.getState().profilePage;

    let postsElements = state.postsData
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator()) // Очищаем textarea от символовв
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action) // Обновляем state для обновления UI
    }

    return (
        <div className={classes.myPost}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={state.newPostText}
                    />
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
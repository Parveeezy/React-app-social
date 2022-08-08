import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.state.postsData
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef()

    const addPost = () => {
        let text = newPostElement.current.value; // получаем value из textarea
        // props.addPost(text); //Публикуем запись на стену
        let action = {type: 'ADD-POST', text: text};
        props.dispatch(action) // Очищаем textarea от символовв
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', text: text};
        props.dispatch(action) // Обновляем state для обновления UI
    }

    return (
        <div className={classes.myPost}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.state.newPostText}/>
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
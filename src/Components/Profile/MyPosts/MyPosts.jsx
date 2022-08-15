import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    const onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.myPost}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}
                    />
                </div>

                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>)
};

export default MyPosts;
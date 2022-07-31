import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {

    let postsElements = props.postsData
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={classes.myPost}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>)
};

export default MyPosts;
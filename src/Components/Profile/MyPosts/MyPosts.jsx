import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = () => {
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
                <Post message="Hello, how it's going?" likesCount={30}/>
                <Post message="hop hey la la ley" likesCount={15}/>
            </div>
        </div>)
};

export default MyPosts;
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hello, how it\'s going?', likesCount: 15},
        {id: 2, message: "hop hey la la ley", likesCount: 35}
    ]

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>)
};

export default MyPosts;
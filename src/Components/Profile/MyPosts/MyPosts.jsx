import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hello, how it's going?" likes='like' count={30}/>
                <Post message="hop hey la la ley" likes='like' count={15}/>
            </div>
        </div>)
};

export default MyPosts;
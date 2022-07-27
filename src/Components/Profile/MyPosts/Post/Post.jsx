import s from "./Post.module.css"

const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://img.freepik.com/premium-vector/portrait-of-a-young-man-with-beard-and-hair-style-male-avatar-vector-illustration_266660-423.jpg"/>
                Post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>)
};

export default Post;
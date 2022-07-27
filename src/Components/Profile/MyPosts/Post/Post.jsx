import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img
                    alt='man'
                    src="https://img.freepik.com/premium-vector/portrait-of-a-young-man-with-beard-and-hair-style-male-avatar-vector-illustration_266660-423.jpg"/>
                {props.message}
                <div>
                    <span>{props.likes}: {props.count}</span>
                </div>
            </div>
        </div>)
};

export default Post;
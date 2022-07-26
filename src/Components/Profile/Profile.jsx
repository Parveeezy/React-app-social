import s from "./Profile.module.css"


const Profile = () => {
    return (<div className={s.profile}>
        <div>
            <img alt="img" src="https://nissi-beach.com/wp-content/uploads/2016/11/NissiBeach-21-1620x600.jpg"/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My Posts
            <div>
                New Post
            </div>
        </div>
        <div className={s.posts}>
            <div className={s.item}>
                Post 1
            </div>
            <div className={s.item}>
                Post 2
            </div>
        </div>
    </div>);
};

export default Profile;
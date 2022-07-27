import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img alt="img" src="https://nissi-beach.com/wp-content/uploads/2016/11/NissiBeach-21-1620x600.jpg"/>
            </div>
            <div>
                ava + description
            </div>

            <MyPosts/>

        </div>);
};

export default Profile;
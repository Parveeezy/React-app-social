import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={classes.profile}>
                <img alt="img" src="https://nissi-beach.com/wp-content/uploads/2016/11/NissiBeach-21-1620x600.jpg"/>
            </div>
            <div className={classes.profile_ava}>
                ava + description
            </div>
            <div className={classes.myPost}>
                <MyPosts/>
            </div>
        </div>);
};

export default Profile;
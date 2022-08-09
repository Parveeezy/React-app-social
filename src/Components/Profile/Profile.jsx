import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts store={props.store}
                     addPost={props.addPost}
                     dispatch={props.dispatch}/>
        </div>);
};

export default Profile;
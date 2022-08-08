import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state.profilePage}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}
                     newPostText={props.state.newPostText}/>
        </div>);
};

export default Profile;
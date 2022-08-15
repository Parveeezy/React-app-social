import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    }

    return (
        <div>
            <MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.postsData}
                     newPostText={state.profilePage.newPostText}
            />
        </div>)
};

export default MyPostsContainer;
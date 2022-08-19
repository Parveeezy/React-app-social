import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (useId) => {
            dispatch(unfollowActionCreator(useId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default usersContainer;
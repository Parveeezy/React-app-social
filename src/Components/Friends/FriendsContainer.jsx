import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        state: state.friendsPage
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
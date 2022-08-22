import React, {Component} from 'react';
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user_img.png'

// const Users = (props) => {
//
//     const getUsers = () => {
//         if (props.users.length === 0) {
//             axios
//                 .get('https://social-network.samuraijs.com/api/1.0/users/')
//                 .then(response => {
//                     props.setUsers(response.data.items)
//                 })
//         }
//     }
//
//
//     return <div>
//         <button onClick={getUsers}>Get Users</button>
//         {
//             props.users.map(user =>
//                 <div key={user.id}>
//                     <span>
//                         <div>
//                             <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='user'
//                                  className={styles.userPhoto}/>
//                         </div>
//                         <div>
//                             {user.followed
//                                 ? <button onClick={() => {
//                                     props.unfollow(user.id)
//                                 }}>Unfollow</button>
//                                 : <button onClick={() => {
//                                     props.follow(user.id)
//                                 }}>Follow</button>
//                             }
//                         </div>
//                     </span>
//
//                     <span>
//                         <span>
//                             <div>{user.name}</div><div>{user.status}</div>
//                         </span>
//                         <span>
//                             <div>{"user.location.country"}</div>
//                             <div>{"user.location.city"}</div>
//                         </span>
//                     </span>
//                 </div>
//             )
//         }
//     </div>
// }; //

class Users extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users/')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='user'
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(user.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>

                            <span>
                        <span>
                            <div>{user.name}</div><div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Users;
import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user_img.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []


    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    /*Разбивка цифр страниц на части по 6*/
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);


    return (<div>
        <div className={styles.pages}>
            {slicedPages.map(p => {
                return <span key={props.id} className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>
                            {p}
                        </span>
            })}
        </div>
        {props.users.map(user => (<div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'./../Profile/' + user.id}>
                                <img alt='img' src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {

                                    axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '28b479d2-4a1b-415e-a50a-e02d96545f01'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(user.id);
                                            }
                                        });


                                }}>Unfollow</button>
                                : <button onClick={() => {

                                    axios
                                        .post(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '28b479d2-4a1b-415e-a50a-e02d96545f01'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id);
                                            }
                                        });


                                }}>Follow</button>}
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
        </div>))}
    </div>);
};

export default Users;
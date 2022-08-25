import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user_img.png";
import {NavLink} from "react-router-dom";

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
        {props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'./../Profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed ? <button onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button> : <button onClick={() => {
                                props.follow(user.id)
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
        </div>)}
    </div>);
};

export default Users;
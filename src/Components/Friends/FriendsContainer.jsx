import React from 'react';
import classes from './Friends.module.css'
import StoreContext from "../../StoreContext";
import Friends from "./Friends";

const FriendsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().friendsPage;


                return (
                    <div className={classes.friends}>
                        <Friends state={state}/>
                    </div>
                );
            }
        }
        </StoreContext.Consumer>
    )
};

export default FriendsContainer;
import React from 'react';
import classes from './Friends.module.css'

const Friends = (props) => {

    let friendsElements = props.state.friendsData
        .map(friends => <div key={friends.id} className={classes.friendItem}>
            <img alt='person-avatar'
                 src={friends.image}/>
            {friends.name}
        </div>)

    return (
        <div className={classes.friends}>
            <h3>Friends</h3>
            <div className={classes.friendsItems}>
                {friendsElements}
            </div>
        </div>
    );
};

export default Friends;
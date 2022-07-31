import React from 'react';
import classes from "./ProfileInfio.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.profileInfo}>
                <img alt="img" src="https://nissi-beach.com/wp-content/uploads/2016/11/NissiBeach-21-1620x600.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
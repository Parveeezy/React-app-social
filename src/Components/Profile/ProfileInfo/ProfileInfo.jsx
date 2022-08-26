import React from 'react';
import classes from "./ProfileInfio.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={classes.profileInfo}>
                <img alt="img" src="https://nissi-beach.com/wp-content/uploads/2016/11/NissiBeach-21-1620x600.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
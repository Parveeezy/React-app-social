import React from 'react';
import classes from "../Dialogs.module.css";

const DialogMessages = (props) => {
    return (
        <div className={classes.dialogsMessage}>{props.message}</div>
    )
}

export default DialogMessages;
import classes from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import DialogMessages from "./DialogMessages/DialogMessages";
import React from "react";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/state";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogsData
        .map(dialog => <DialogItem
            name={dialog.name}
            id={dialog.id}
        />)

    let messageElements = props.state.messagesData
        .map(message => <DialogMessages
            message={message.message}
            id={message.id}
        />)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = onMessageChangeActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.dialogsMessages}>
                {messageElements}
            </div>
            <div>
                <div>
                    <textarea ref={newMessageElement}
                              onChange={onMessageChange}
                              value={props.state.newMessageText}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
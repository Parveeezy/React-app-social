import classes from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import DialogMessages from "./DialogMessages/DialogMessages";
import React from "react";

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
        let text = newMessageElement.current.value;
        props.addMessage(text)
        props.updateNewMessageText('')
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)
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
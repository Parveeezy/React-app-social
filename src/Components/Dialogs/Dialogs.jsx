import classes from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import DialogMessages from "./DialogMessages/DialogMessages";


const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem
            name={dialog.name}
            id={dialog.id}
            key={dialog.id}
        />)

    let messageElements = props.dialogsPage.messagesData
        .map(message => <DialogMessages
            message={message.message}
            id={message.id}
            key={message.id}
        />)

    let onAddMessage = () => {
        props.onAddMessage()
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text)
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
                    <textarea onChange={onNewMessageChange}
                              value={props.dialogsPage.newMessageText}
                    />
                </div>
                <div>
                    <button onClick={onAddMessage}>Add post</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
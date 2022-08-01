import classes from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import DialogMessages from "./DialogMessages/DialogMessages";

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

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.dialogsMessages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;
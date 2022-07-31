import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={classes.dialogsItem + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const DialogMessages = (props) => {
    return (
        <div className={classes.dialogsMessage}>{props.message}</div>
    )
}

let dialogsData = [
    {id: 1, name: 'Parviz'},
    {id: 2, name: 'Nisso'},
    {id: 3, name: 'Parisa'},
    {id: 4, name: 'Latif'},
]

let dialogElements = dialogsData
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'One'},
    {id: 3, message: 'Hi'},
    {id: 4, message: 'GO'},
]

let messageElements = messagesData
    .map(message => <DialogMessages message={message.message} id={message.id}/>)

const Dialogs = (props) => {
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
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

let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'One'},
    {id: 3, message: 'Hi'},
    {id: 4, message: 'GO'},
]


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>

            <div className={classes.dialogsMessages}>
                <DialogMessages message={messagesData[0].message}/>
                <DialogMessages message={messagesData[1].message}/>
                <DialogMessages message={messagesData[2].message}/>
                <DialogMessages message={messagesData[3].message}/>
            </div>
        </div>
    );
};

export default Dialogs;
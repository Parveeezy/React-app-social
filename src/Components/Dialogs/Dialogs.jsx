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



const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Parviz' id='1'/>
                <DialogItem name='Nisso' id='2'/>
                <DialogItem name='Parisa' id='3'/>
                <DialogItem name='Latif' id='4'/>
            </div>

            <div className={classes.dialogsMessages}>
                <DialogMessages message='Hello'/>
                <DialogMessages message='One'/>
                <DialogMessages message='Hi'/>
                <DialogMessages message='GO'/>
            </div>
        </div>
    );
};

export default Dialogs;
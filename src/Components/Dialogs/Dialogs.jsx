import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialogsItem + classes.active}>
                    <NavLink to='/dialogs/1'>Parviz</NavLink>
                </div>
                <div className={classes.dialogsItem}>
                    <NavLink to='/dialogs/2'>Nisso</NavLink>
                </div>
                <div className={classes.dialogsItem}>
                    <NavLink to='/dialogs/3'>Parisa</NavLink>
                </div>
                <div className={classes.dialogsItem}>
                    <NavLink to='/dialogs/4'>Latif</NavLink>
                </div>
            </div>

            <div className={classes.dialogsMessages}>
                <div className={classes.dialogsMessage}>Hello</div>
                <div className={classes.dialogsMessage}>One</div>
                <div className={classes.dialogsMessage}>Two</div>
                <div className={classes.dialogsMessage}>Run</div>
            </div>
        </div>
    );
};

export default Dialogs;
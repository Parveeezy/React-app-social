import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialogsItem + classes.active}>
                    Parviz
                </div>
                <div className={classes.dialogsItem}>
                    Nisso
                </div>
                <div className={classes.dialogsItem}>
                    Parisa
                </div>
                <div className={classes.dialogsItem}>
                    Latif
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
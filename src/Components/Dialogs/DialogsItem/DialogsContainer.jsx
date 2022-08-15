import {addMessageActionCreator, onMessageChangeActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let messageChange = (text) => {
        let action = onMessageChangeActionCreator(text);
        props.store.dispatch(action)
    }

    return (
        <div>
            <Dialogs onAddMessage={addMessage}
                     onMessageChange={messageChange}
                     messages={state.dialogsPage.dialogsData}
                     addNewMessageText={state.dialogsPage.messagesData}
                     newMessageText={state.dialogsPage.newMessageText}
            />
        </div>
    );
};

export default DialogsContainer;
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

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
                     dialogsPage={state}
            />
        </div>
    );
};

export default DialogsContainer;
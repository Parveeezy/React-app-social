import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState().dialogsPage;

                let addMessage = () => {store.dispatch(addMessageActionCreator())}

                let messageChange = (text) => {
                    let action = onMessageChangeActionCreator(text);
                    store.dispatch(action)
                }

                return (
                    <div>
                        <Dialogs onAddMessage={addMessage}
                                 onMessageChange={messageChange}
                                 dialogsPage={state}
                        />
                    </div>
                );
            }
        }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;
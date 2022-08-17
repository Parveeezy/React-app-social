const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Parviz'},
        {id: 2, name: 'Nisso'},
        {id: 3, name: 'Parisa'},
        {id: 4, name: 'Latif'},
    ],
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'One'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'GO'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            let stateCopy = {...state};
            stateCopy.dialogsData = [...state.dialogsData]
            stateCopy.messagesData.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})

export default dialogsReducer;
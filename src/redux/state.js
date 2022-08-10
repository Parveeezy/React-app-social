import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello, how it\'s going?', likesCount: 15},
                {id: 2, message: "hop hey la la ley", likesCount: 35}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        friendsPage: {
            friendsData: [
                {
                    id: '1',
                    name: 'Вася',
                    image: 'https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg?fj=1'
                },
                {
                    id: '2',
                    name: 'Петя',
                    image: 'https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg?fj=1'
                },
                {
                    id: '3',
                    name: 'Саша',
                    image: 'https://previews.123rf.com/images/yupiramos/yupiramos1610/yupiramos161007352/64369849-young-man-avatar-isolated-icon-vector-illustration-design.jpg?fj=1'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('=)')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

        this._callSubscriber(this._state)
    }
}

export default store;
window.store = store;
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

    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 12
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    _updateNewPostText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    _addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messagesData.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state);
    },
    _updateNewMessageText(text) {
        this._state.dialogsPage.newMessageText = text;
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost(action.text)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.text)
        } else if (action.type === 'ADD-MESSAGE') {
            this._addMessage(action.text)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._updateNewMessageText(action.text)
        }
    }
}


export default store;
window.store = store;
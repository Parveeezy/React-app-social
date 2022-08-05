import {renderEntireTree} from "../render";

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 12
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state);
}

export let updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    renderEntireTree(state);
}

export let addMessage = (text) => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messagesData.push(newMessage)
    state.dialogsPage.newMessageText = ''
    renderEntireTree(state);
}

export let updateNewMessageText = (text) => {
    state.dialogsPage.newMessageText = text;
    renderEntireTree(state)
}

export default state;
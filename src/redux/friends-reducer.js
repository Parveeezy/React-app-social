const FRIENDS_LIST = 'FRIENDS-LIST'

let initialState = {
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
        },
    ]
}

const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FRIENDS_LIST: {
            let stateCopy = {...state};
            stateCopy.friendsData = [...state.friendsData]
            // stateCopy.friendsData.push() ???
            return stateCopy;
        }
        default:
            return state;
    }
}
export const friendsListActionCreator = () => ({type: FRIENDS_LIST})
export default friendsReducer;
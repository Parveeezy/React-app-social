const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    // usersData: [
    //     {
    //         id: 1,
    //         followed: false,
    //         fullName: 'Parviz',
    //         status: 'Hey im here',
    //         location: {city: 'Moscow', country: 'Russia'}
    //     },
    //     {
    //         id: 2,
    //         followed: false,
    //         fullName: "Nisso",
    //         status: 'Okay lets go',
    //         location: {city: 'Moscow', country: 'Russia'}
    //     },
    //     {
    //         id: 3,
    //         followed: true,
    //         fullName: "Parisa",
    //         status: 'Im princess',
    //         location: {city: 'Moscow', country: 'Russia'}
    //     },
    //     {id: 4, followed: false, fullName: "Latif", status: 'Im Lion', location: {city: 'Moscow', country: 'Russia'}},
    //     {
    //         id: 5,
    //         followed: false,
    //         fullName: "Irina",
    //         status: 'I love cats',
    //         location: {city: 'Dushanbe', country: 'Tajikistan'}
    //     },
    //     {
    //         id: 6,
    //         followed: false,
    //         fullName: "Eradzh",
    //         status: 'Im gamer',
    //         location: {city: 'Dushanbe', country: 'Tajikistan'}
    //     },
    // ],
}

const usersReducer = (state, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {...state, users: [...state.usersData, ...action.usersData]}
        default: {
            return state;
        }
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer;
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://i.pinimg.com/originals/c8/c5/d4/c8c5d4868b038c48f3c8f226a2dc9d0b.png',
        //     followed: false,
        //     fullName: 'Parviz',
        //     status: 'Hey im here',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVD8JBbONOcr3R8UkMnCBfCrJS11tZfWOaw&usqp=CAU',
        //     followed: false,
        //     fullName: "Nisso",
        //     status: 'Okay lets go',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRvUBtumSw6XlzUX71fhs3hcSqe2Crm2bqQ&usqp=CAU',
        //     followed: true,
        //     fullName: "Parisa",
        //     status: 'Im princess',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 4,
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRvUBtumSw6XlzUX71fhs3hcSqe2Crm2bqQ&usqp=CAU',
        //     followed: false,
        //     fullName: "Latif",
        //     status: 'Im Lion',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 5,
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PAGrRoveJ-xDhCedpS5LPr3QfNwFlwF9Jw&usqp=CAU',
        //     followed: false,
        //     fullName: "Irina",
        //     status: 'I love cats',
        //     location: {city: 'Dushanbe', country: 'Tajikistan'}
        // },
        // {
        //     id: 6,
        //     photoUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
        //     followed: false,
        //     fullName: "Eradzh",
        //     status: 'Im gamer',
        //     location: {city: 'Dushanbe', country: 'Tajikistan'}
        // },
    ],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default: {
            return state;
        }
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer;
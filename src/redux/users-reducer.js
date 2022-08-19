const USERS = 'USERS'

let initialState = {
    usersData: [
        {id: 1, fullName: 'Parviz', status: 'Hey im here', location: {city: 'Moscow', country: 'Russia'}},
        {id: 2, fullName: "Nisso", status: 'Okay lets go', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, fullName: "Parisa", status: 'Im princess', location: {city: 'Moscow', country: 'Russia'}},
        {id: 4, fullName: "Latif", status: 'Im Lion', location: {city: 'Moscow', country: 'Russia'}},
        {id: 5, fullName: "Irina", status: 'I love cats', location: {city: 'Dushanbe', country: 'Tajikistan'}},
        {id: 6, fullName: "Eradzh", status: 'Im gamer', location: {city: 'Dushanbe', country: 'Tajikistan'}},
    ],
}

const usersReducer = () => {
    switch (action.type) {
        case USERS: {
            return {}
        }
        default: {
            return state;
        }
    }
}
const initState = {
    users: [
        { id: 1, name: 'Le Minh Nghia' },
        { id: 2, name: 'Le Thi Huong' },
        { id: 3, name: 'Le Minh Nghia vs Le Thi Huong' }
    ]
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1000)
            let user = { id: id, name: `random - ${id} ` }
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
    return state
}

export default rootReducer
//./context/User/UserReducer.js
const reducer = (globalState, action) => {

    switch (action.type) {
        case 'SUCCESSFULL_REGISTRATION': 
        case 'SUCCESSFULL_LOGIN':

        localStorage.setItem('token', action.payload)

        return {
            ...globalState,
            authStatus: true
        }

        case 'GET_DATA_USER':
            return {
                ...globalState,
                authStatus: true,
                currentUser: action.payload
            }

        case 'LOGOUT_USUARIO':
            localStorage.removeItem('token')

            return {
                ...globalState,
                user: null,
                authStatus: null,
                msg: action.payload,
            }

    default: 
        return globalState
    }
}

export default reducer
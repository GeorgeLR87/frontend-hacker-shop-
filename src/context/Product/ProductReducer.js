const reducer = (globalState, action) => {

    switch (action.type) {

        case 'GET_PRODUCTS':
            return {
                ...globalState,
                products: action.payload
            }

        case 'CHANGE_TEXT':
            return {
                ...globalState,
                hola: action.payload
            }

        default:
            return globalState
    }
}

export default reducer
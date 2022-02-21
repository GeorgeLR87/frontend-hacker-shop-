const reducer = (globalState, action) => {

    switch (action.type) {
        case 'GET_PRODUCT':
        case 'UPDATE_PRODUCT':
            return {
                ...globalState,
                singleProduct: action.payload
            }

        case 'GET_PRODUCTS':
            return {
                ...globalState,
                products: action.payload
            }

        default:
            return globalState
    }
}

export default reducer
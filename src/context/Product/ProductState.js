import { useReducer } from "react"
import ProductContext from "./ProductContext"
import ProductReducer from "./ProductReducer"
import axiosClient from "./../../config/axios"

const ProductState = (props) => {

    const initialState = {
        products: [],
        singleProduct: {
            _id: '',
            name: '',
            price: '',
            image: ''
        },
        hola: 'mundo'
    }
    
    const [globalState, dispatch] = useReducer(ProductReducer, initialState)

    const changeText = () => {
        dispatch({
            type: 'CHANGE_TEXT',
            payload: 'Cambio de Texto'
        })
    }

    const getProducts = async () => {

        const res = await axiosClient.get('products/readall')

        console.log('Obteniendo Productos');
        

        const list = res.data.data

        dispatch({
            type: 'GET_PRODUCTS',
            payload: list
        })
    }

    const getProduct = async (productId) => {

        const res = await axiosClient.get(`products/readone/${productId}`)

        const selectedProduct = res.data.data

        dispatch({
            type: 'GET_PRODUCT',
            payload: selectedProduct
        })

        
    }
    
    
    return (
        <ProductContext.Provider
        value={{
            products: globalState.products,
            hola: globalState.hola,
            singleProduct: globalState.singleProduct,
            changeText,
            getProducts,
            getProduct
        }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState
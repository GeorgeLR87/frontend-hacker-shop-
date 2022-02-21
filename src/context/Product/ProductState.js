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
        }
    }
    
    const [globalState, dispatch] = useReducer(ProductReducer, initialState)

    const getProducts = async () => {

        const res = await axiosClient.get('products/readall')

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

    const createProduct = async (form) => {

        const res = await axiosClient.post('/products/create', form)
     
    }

    const updateProduct = async (form, idProduct) => {

        const res = await axiosClient.put(`products/edit/${idProduct}`, form)

        const updatedProduct = res.data.data

        dispatch({
            type: 'UPDATE_PRODUCT',
            payload: updatedProduct
        })
    }

    const deleteProduct = async (idProduct) => {
        const res = await axiosClient.delete(`products/delete/${idProduct}`)

        const deletedProduct = res.data.data

        dispatch({
            type: 'DELETE_PRODUCT',
            payload: deletedProduct
        })
    }
    
    
    return (
        <ProductContext.Provider
        value={{
            products: globalState.products,            
            singleProduct: globalState.singleProduct,            
            getProducts,
            getProduct, 
            createProduct,
            updateProduct,
            deleteProduct
        }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState
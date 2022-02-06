import { useReducer } from "react"
import ProductContext from "./ProductContext"
import ProductReducer from "./ProductReducer"

const ProductState = (props) => {

    const initialState = {
        products: [],
        hola: 'mundo'
    }
    
    const [globalState, dispatch] = useReducer(ProductReducer, initialState)
    
    
    return (
        <ProductContext.Provider
        value={{
            products: globalState.products,
            hola: globalState.hola
        }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState
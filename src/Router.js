import React from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

import Products from './components/Products'
import Single from './components/Products/Single'
import ProductState from "./context/Product/ProductState"
import CreateProduct from "./components/Products/CreateProduct"
import EditProduct from "./components/Products/Single/EditProduct"

import UserState from "./context/User/UserState"
import Auth from "./routes/Auth"
//import Private from "./routes/Private"



const Router = () => {

    return (
        <>
           <UserState>
                <ProductState>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Layout />}>
                                {/* localhost:3000/ */}
                                <Route index element={<Home />} />
                                {/* localhost:3000/register */}
                                <Route
                                     path='users/create' 
                                     element={<Auth component={Register} />} />
                                {/* localhost:3000/login */}
                                <Route 
                                    path='users/login' 
                                    element={<Auth component={Login} />} />
                                {/* localhost:3000/products */}
                                <Route path='products' element={<Products />} />
                                {/* localhost:3000/products/create */}
                                <Route path='products/create' element={<CreateProduct />} />
                                {/* localhost:3000/products/:id */}
                                <Route path='products/:id' element={<Single />} />
                                {/* localhost:3000/products/edit/:id */}
							    <Route path="products/edit/:id" element={<EditProduct />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ProductState>
            </UserState>
        </>
    )
}

export default Router
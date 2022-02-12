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



const Router = () => {

    return (
        <>
            <ProductState>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            {/* localhost:3000/ */}
                            <Route index element={<Home />} />
                            {/* localhost:3000/register */}
                            <Route path='register' element={<Register />} />
                            {/* localhost:3000/login */}
                            <Route path='login' element={<Login />} />
                            {/* localhost:3000/products */}
                            <Route path='products' element={<Products />} />
                            {/* localhost:3000/products/create */}
                            <Route path='products/create' element={<CreateProduct />} />
                            {/* localhost:3000/products/:id */}
                            <Route path='products/:id' element={<Single />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ProductState>
        </>
    )
}

export default Router
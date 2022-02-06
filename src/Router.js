import React from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Products from './components/Products'



const Router = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='register' element={<Register />} />
                        <Route path='login' element={<Login />} />
                        <Route path='products' element={<Products />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router
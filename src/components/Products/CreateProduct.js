import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductContext from './../../context/Product/ProductContext'

export default function CreateProduct() {

    const navigate = useNavigate()

    // 1. Estado Global
    const ctx = useContext(ProductContext)

    const {
        createProduct
    } = ctx

    
    // 2. Estado Local
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: ''
    })

    // 3. Funciones 
    const handleChange = (e) => {
        e.preventDefault()

        setNewProduct({
        ...newProduct,
        [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()

        createProduct(newProduct)

        navigate('/products')
    }


    return (
        <>
        <form onSubmit={ (event) => {handleSubmit(event) }}>
            <div className="lg:grid grid-cols-6">
                <div className="">

                    <div className="relative border border-gray-700 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                        <label 
                            htmlFor="name" 
                            className="block text-xs font-medium text-gray-700"
                            >
                                Name
                        </label>
                        <input 
                            onChange={ (event) => { handleChange (event)}}
                            type="text" 
                            name="name" 
                            id="name" 
                            className="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" 
                            placeholder="Product Name" />
                    </div>

                    <div className="relative border border-gray-700 rounded-md rounded-t-none rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                        <label 
                            htmlFor="price" 
                            className="block text-xs font-medium text-gray-700"
                            >
                                Price
                        </label>
                        <input 
                            onChange={ (event) => { handleChange (event)}}
                            type="number" 
                            name="price" 
                            id="price" 
                            className="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" 
                            placeholder="Price" />
                    </div>

                    <div className="relative border border-gray-700 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                        <label 
                            htmlFor="image" 
                            className="block text-xs font-medium text-gray-700"
                            >
                                Image
                            </label>
                        <input 
                            onChange={ (event) => { handleChange (event)}}
                            type="text" 
                            name="image" 
                            id="image" 
                            className="block border-0  p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" 
                            placeholder="Image" />
                    </div>
                </div>
            </div>
            <br></br>

            <button 
                type="submit" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Save
            </button>

        </form>
        </>
    )
}

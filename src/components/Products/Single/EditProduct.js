// ./src/components/Guitars/Single/EditProduct.js
import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProductContext from '../../../context/Product/ProductContext'

export default function EditProduct() {

    const navigate = useNavigate()

    //1. Estado Global
    const params = useParams()
    const idProduct = params.id

    const ctx = useContext(ProductContext)

    const {
        singleProduct,
        getProduct,
        updateProduct
    } = ctx

    // 2. Estado Local
    const [productData, setProductData] = useState({
        name: '',
        price: '',
        image: ''
    })
    
    //3. Funciones
    useEffect(() => {
        getProduct(idProduct)
    },[])

    useEffect(() => {
        
        const {
            name,
            price,
            image
        } = ctx.singleProduct

        setProductData({
            name: name,
            price: price,
            image: image
        })
    }, [singleProduct])

    const handleChange = (e) => {
        e.preventDefault()

        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        updateProduct(productData, idProduct)

        navigate(`/products/${idProduct}`)
    }

  return (
    <>
        <form onSubmit={ (event) => { handleSubmit(event) } }>
				<div className="shadow sm:rounded-md sm:overflow-hidden">
					<div className="bg-white py-6 px-4 space-y-6 sm:p-6">
						<div>
							<h3 className="text-lg leading-6 font-medium text-gray-900">Edit Product</h3>						
						</div>

						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 sm:col-span-3">
								<label for="first-name" Name="block text-sm font-medium text-gray-700">Name</label>
								<input
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="name"  
									value={productData.name}
									className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label for="last-name" className="block text-sm font-medium text-gray-700">Price (MXN)</label>
								<input 
									onChange={ (event) => { handleChange(event) } } 
									type="number" 
									name="price" 
									value={productData.price}
									className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div className="col-span-6 sm:col-span-4">
								<label for="email-address" className="block text-sm font-medium text-gray-700">Image</label>
								<input 
									type="text" 
									name="image" 
									onChange={ (event) => { handleChange(event) } } 
									value={productData.image}
									className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>
					</div>
					<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button type="submit" className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Save Product
						</button>
					</div>
				</div>
			</form>
      
    </>
  )
}

// ./ client/src/components/Products/Single/index.js
import React, { useContext, useEffect } from 'react'
import ProductContext from './../../../context/Product/ProductContext'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import UserContext from '../../../context/User/UserContex'

export default function Single() {

  const ctxUser = useContext(UserContext)

  const {
    authStatus
  } = ctxUser

  const ctx = useContext(ProductContext)
  const { 
    singleProduct, 
    getProduct,
    deleteProduct
  } = ctx

  const params = useParams()
  const id = params.id

  useEffect(() => {
    getProduct(id)
  }, [])

  return (
    <>
      <section className="w-80 h-80 flex flex-col justify-between items-center border-2 border-emerald-500 bg-white ">
        <div className=" w-80 h-80 border-2 flex flex-col justify-around items-center border-red-500">
          
            <img
              alt="Your Cart"
              src={singleProduct.image}
              className="border-2 border-blue-500 w-32"
            />
         

          <div className="">
            <Link to={`/products/${singleProduct._id}`}>
              <h5 className="text-sm">{singleProduct.name}</h5>
            </Link>
            <p className="text-sm"> $ {singleProduct.price}</p>
          </div>

          {
            authStatus ?
            <>
              <div className="">
            <Link to={`/products/edit/${id}`}>
              <button 
                type='button'
                className="border border-blue-800 text-blue-800 h-6 w-24 flex justify-center items-center text-xs rounded-sm"
                >Edit
              </button>
            </Link>

            <Link to={'/products'}>
            <button 
                onClick={() => deleteProduct(id)}
                type='button'
                className="border border-red-700 bg-red-700 text-white h-6 w-20 flex justify-center items-center text-xs rounded-sm"
                >Remove
              </button>
            </Link>
              
          </div>
            
            </>
            :
            <>
            </>
          }          
        </div>
      </section>
    </>
  )
}

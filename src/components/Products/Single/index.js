// ./ client/src/components/Products/Single/index.js
import React, { useContext } from 'react'
import ProductContext from './../../../context/Product/ProductContext'
import { useParams  } from 'react-router-dom'

export default function Single() {

    const ctx = useContext(ProductContext)
    const { getProduct, singleProduct } = ctx

    const params = useParams()
    const id = params.id

  return (
    <div>
      Pagina individual de guitarra

      <button onClick={() => { getProduct(id) }}>
          Obtener Producto individual
      </button>

      <h1>{singleProduct.name}</h1>
      <p>{singleProduct.price}</p>
      <p>{singleProduct.image}</p>
    </div>
  )
}

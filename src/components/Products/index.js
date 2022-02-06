// ./client/src/component/Products/index.js

import React, { useContext } from 'react'
import ProductContext from './../../context/Product/ProductContext'

export default function Products() {

  const ctx = useContext(ProductContext)

  console.log(ctx);

  return (
  <>
    <p>Listado de Productos</p>

    {/* <p>{ctx.hola}</p> */}
          
  </>
  )
}

// ./client/src/component/Products/index.js

import React, { useContext } from 'react'
import ProductContext from './../../context/Product/ProductContext'

export default function Products() {

  const ctx = useContext(ProductContext)

  const { 
    products, 
    hola, 
    changeText,
    getProducts
  } = ctx

  

  return (
  <>
    <p>Listado de Productos</p>

    <p>{ hola }</p>

    <button onClick={ () => { changeText() }}>
      Boton cambiar Texto
    </button>

    <button onClick={ () => { getProducts() }}>
      Listar Productos
    </button>

    <div>
      <h2>Listado de Productos</h2>

      <ul>
        {
          products.map((element) => {
            return (
              <li key={element._id}>
                <p>{element.name}</p>
                <p>{element.price}</p>

              </li>
            )
          })
        }
      </ul>
    </div>
          
  </>
  )
}

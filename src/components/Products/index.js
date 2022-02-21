// ./client/src/component/Products/index.js

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductContext from "./../../context/Product/ProductContext";

export default function Products() {
  const ctx = useContext(ProductContext);

  const { products, getProducts } = ctx;

  useEffect(() => {
    getProducts()
  }, [])

  return (
            <>
                <div className="flex flex-row border-yellow-500 border-2 h-screen w-full bg-slate-100">
                    <div className="grid grid-cols-3 grid-rows-2  justify-center p-6 w-4/6  border-2 border-pink-500">
                      {
                        products.map(element => {
                          return (
                                    <section className="w-80 h-80 flex flex-col justify-between items-center border-2 border-emerald-500 bg-white ">
                                        <div className=" w-80 h-80 border-2 flex flex-col justify-around items-center border-red-500">
                                          <Link to={`/products/${element._id}`}>
                                            <img
                                              alt="Your Cart"
                                              src={element.image}
                                              className="border-2 border-blue-500 w-32"
                                            />
                                          </Link>

                                          <div className="">
                                            <Link to={`/products/${element._id}`}>
                                              <h5 className="text-sm">{element.name}</h5>
                                            </Link>
                                            <p className="text-sm"> $ {element.price}</p>
                                          </div>

                                          <div className="">
                                            <button className="border border-green-600 text-green-600 h-6 w-24 flex justify-center items-center
                                            text-xs rounded-sm">Add To Cart</button>

                                            <button className="border border-red-700 bg-red-700 text-white h-6 w-20 flex justify-center items-center
                                            text-xs rounded-sm"
                                            >Remove</button>
                                          </div>
                                        </div>
                                    </section>
                                )
                              }
                        )
                      }
                    </div>
                </div>
            </>
        )
}

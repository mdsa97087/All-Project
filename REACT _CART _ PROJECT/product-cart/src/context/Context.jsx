import React, { useContext } from 'react'
import {createContext} from "react"
import { faker } from '@faker-js/faker';
import {cartReducer,productReducer} from "./Reducers"
import {useReducer} from "react"

const Cart=createContext();
faker.seed(99);

function Context({children}) {

      const products=[...Array(20)].map(()=> ({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.avatar(),
            fastDelivery: faker.datatype.boolean(),
            rating:3,
            inStock:true,
            // ratings: faker.random.ratings(),
            // inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            // fastDelivery: faker.datatype.boolean(),
            // ratings: faker.rating.arrayElement([1, 2, 3, 4, 5]),

      }))
      console.log(products)

   const [state, dispatch] = useReducer(cartReducer,{
      products:products,
      cart:[]
   })

   const [productState, productDispatch] = useReducer(productReducer,{
      byStock : false,
      byFastDelivery:false,
      byRating:0,
      searchQuery:"",

   })

  return (
    <Cart.Provider value={{state, dispatch ,productState, productDispatch}}>
            {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState =()=>{
      return useContext(Cart)
}


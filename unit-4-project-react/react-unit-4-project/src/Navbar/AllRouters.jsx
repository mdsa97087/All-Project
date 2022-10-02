import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../AuthContext/Private'
import Contactsales from '../Components/Contactsales'
import Enterprise from '../Components/Enterprise'
import Home from '../Components/Home'
import Pricing from '../Components/Pricing'
import Product from '../Components/Product'
import Resources from '../Components/Resources'
import SignIn from '../Components/Signin'
import Signup from '../Components/Signin'
import Signupforfree from '../Components/Signupforfree'
import Solution from '../Components/Solution'
import UserPage from './UserPage'


function AllRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={
        <PrivateRoute >
          <Product />
        </PrivateRoute>
      }></Route>
      <Route path="/solution" element={
        <PrivateRoute >
          <Solution />
        </PrivateRoute>
      }></Route>
      <Route path="/pricing" element={
        <PrivateRoute >
          <Pricing />
        </PrivateRoute>
      }></Route>
      <Route path="/enterprise" element={
        <PrivateRoute >
          <Enterprise />
        </PrivateRoute>
      }></Route>
      <Route path="/resources" element={
        <PrivateRoute >
          <Resources />
        </PrivateRoute>
      }></Route>
      <Route path="/contactsales" element={
        <PrivateRoute >
          <Contactsales />
        </PrivateRoute>
      }></Route>
      <Route path="/signup" element={<Signupforfree />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path='/userpage' element={<UserPage/>}></Route>
    </Routes>
  )
}

export default AllRouters
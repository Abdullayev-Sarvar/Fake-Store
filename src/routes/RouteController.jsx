import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Login from './login/Login'
import Product from './product/Product'

const RouteController = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/product/:id' element={<Product/>} />
    </Routes>
  )
}

export default RouteController

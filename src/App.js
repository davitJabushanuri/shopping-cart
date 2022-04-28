import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import ShoppingCart from './pages/ShoppingCart'
import cartContext from './Helpers/cartContext'
import carsArray from './Helpers/carsArray'

function App() {
	const [cart, setCart] = useState([])
	const [shop, setShop] = useState(carsArray)
	const [count, setCount] = useState(0)

	return (
		<div className='App'>
			<cartContext.Provider
				value={{ cart, setCart, shop, setShop, count, setCount }}
			>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/shopping-cart' element={<ShoppingCart />} />
				</Routes>
			</cartContext.Provider>
		</div>
	)
}

export default App

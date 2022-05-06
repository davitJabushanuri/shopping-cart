import React, { useState, useContext, useEffect } from 'react'
import cartContext from '../Helpers/cartContext'

import Checkout from '../components/Checkout'
import Cart from '../components/Cart'
import carsArray from '../Helpers/carsArray'

const ShoppingCart = () => {
	const { cart, setCart, count, setCount, setShop } = useContext(cartContext)
	const [total, setTotal] = useState(0)
	const [message, setMessage] = useState('Your cart is empty')

	const handleDelete = carId => {
		setCart(x => x.filter(car => car.id !== carId))
	}

	const getTotal = arr => {
		let x = 0
		for (let i = 0; i < arr.length; i++) {
			x += arr[i].price * arr[i].quantity
		}
		return x
	}

	const handleSubmit = () => {
		setMessage('Thanks for your order!')
		setCart([])
		setTotal(0)
		setCount(0)
		setShop([...carsArray])
	}

	useEffect(() => {
		if (cart.length > 0) {
			setTotal(getTotal(cart))
		}
	}, [count])

	return (
		<div className='cart-container'>
			{cart.length < 1 ? (
				<div>
					<h1>{message}</h1>
				</div>
			) : (
				<Cart cart={cart} setCart={setCart} handleDelete={handleDelete} />
			)}
			{cart.length > 0 && (
				<Checkout total={total} cart={cart} handleSubmit={handleSubmit} />
			)}
		</div>
	)
}

export default ShoppingCart

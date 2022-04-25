import React, { useState, useContext, useEffect } from 'react'
import cartContext from '../Helpers/cartContext'

import Checkout from '../components/Checkout'
import Cart from '../components/Cart'

const ShoppingCart = ({ quantity = 1 }) => {
	const { cart, setCart } = useContext(cartContext)
	const [total, setTotal] = useState(0)
	const [message, setMessage] = useState('Your cart is empty')

	const handleDelete = carId => {
		setCart(x => x.filter(car => car.id !== carId))
	}

	const getTotal = arr => {
		let x = 0
		for (let i = 0; i < arr.length; i++) {
			x += arr[i].price
		}

		return x
	}

	const handleSubmit = () => {
		setMessage('Thanks for your order!')
		setCart([])
		setTotal(0)
	}

	useEffect(() => {
		if (cart.length > 0) {
			setTotal(getTotal(cart))
			console.log(total)
		}
	}, [cart])

	return (
		<div className='cart-container'>
			{cart.length < 1 ? (
				<div>
					<h1>{message}</h1>
				</div>
			) : (
				<Cart cart={cart} quantity={quantity} handleDelete={handleDelete} />
			)}
			{cart.length > 0 && (
				<Checkout total={total} handleSubmit={handleSubmit} />
			)}
		</div>
	)
}

export default ShoppingCart

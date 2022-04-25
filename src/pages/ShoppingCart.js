import React, { useState, useContext, useEffect } from 'react'
import cartContext from '../Helpers/cartContext'

import Checkout from '../components/Checkout'
import Cart from '../components/Cart'

const ShoppingCart = ({ quantity = 1 }) => {
	const { cart, setCart } = useContext(cartContext)
	const [total, setTotal] = useState(0)

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

	useEffect(() => {
		if (cart.length > 0) {
			setTotal(getTotal(cart))
			console.log(total)
		}
	}, [cart])

	return (
		<div className='cart-container'>
			{cart.length > 0 && (
				<Cart cart={cart} quantity={quantity} handleDelete={handleDelete} />
			)}
			{cart.length > 0 && <Checkout total={total} />}
		</div>
	)
}

export default ShoppingCart

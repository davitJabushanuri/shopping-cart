import React, { useContext } from 'react'
import cartContext from '../Helpers/cartContext'

const ShoppingCart = () => {
	const { cart, setCart } = useContext(cartContext)

	return (
		<div>
			{!cart
				? 'Your cart is empty'
				: cart.map(item => {
						return <li>{item.model}</li>
				  })}
		</div>
	)
}

export default ShoppingCart

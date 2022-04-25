import React, { useContext } from 'react'
import cartContext from '../Helpers/cartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ShoppingCart = ({ quantity = 1 }) => {
	const { cart, setCart } = useContext(cartContext)

	const handleDelete = carId => {
		setCart(x => x.filter(car => car.id !== carId))
		console.log(cart)
	}

	return (
		<div className='shopping-cart'>
			{!cart
				? 'Your cart is empty'
				: cart.map(item => {
						return (
							<div key={item.id} className='cart-item'>
								<div className='cart-img-container'>
									<img src={item.img} alt='' className='cart-img' />
								</div>
								<div className='cart-info'>
									<div className='cart-model'>
										<h1>{item.model}</h1>
									</div>
									<p className='cart-price'>${item.price}</p>
									<p>quantity {quantity ? quantity : `1`}</p>
									<div className='delivery'>
										<span className='delivery-heading'>Delivery</span>
										<span className='est-delivery'>
											Est. delivery: Apr 28 - May 2
										</span>
									</div>
								</div>
								<button
									onClick={() => handleDelete(item.id)}
									className='delete'
								>
									<FontAwesomeIcon className='delete-icon' icon={faTrash} />
								</button>
							</div>
						)
				  })}
		</div>
	)
}

export default ShoppingCart

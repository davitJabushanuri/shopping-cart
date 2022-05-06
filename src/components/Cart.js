import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, quantity, handleDelete }) => {
	return (
		<div className='shopping-cart'>
			{cart.map(item => {
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
						<button onClick={() => handleDelete(item.id)} className='delete'>
							<FontAwesomeIcon className='delete-icon' icon={faTrash} />
						</button>
					</div>
				)
			})}
		</div>
	)
}

export default Cart

import React from 'react'

const Checkout = ({ total, handleSubmit }) => {
	return (
		<div className='checkout'>
			<h3>Order Summery</h3>
			<div className='items-total order-flex'>
				<p>items:</p>
				<p>USD {total}</p>
			</div>

			<div className='shipping-handling order-flex'>
				<p>Shipping & handling</p>
				<p>USD 0</p>
			</div>

			<div className='order-total order-flex'>
				<p>Order total</p>
				<p>USD {total}</p>
			</div>

			<div className='agreement'>
				<p>
					By placing your order, you agree to Tesla's privacy notice and
					conditions of use.
				</p>
			</div>

			<div className='order-button'>
				<button onClick={handleSubmit}>Place your order</button>
			</div>
		</div>
	)
}

export default Checkout

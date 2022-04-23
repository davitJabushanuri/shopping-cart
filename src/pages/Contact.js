import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
	return (
		<div className='contact'>
			<div className='faq'>
				<h1>Frequently Asked Questions</h1>
				<p>How should I prepare for delivery?</p>
				<p>To prepare for delivery, complete the following steps.</p>
				<p>
					Download the Tesla app, which will pair with your Tesla. You will need
					the Tesla app to remotely unlock and access your car when taking
					delivery.
				</p>
				<p>Complete all pre-delivery tasks in your Tesla Account.</p>
				<p>
					Once you recieve a VIN, upload proof of insurance in the Tesla app.
				</p>
				<p>Submit final payment.</p>
				<p>
					If applicable, accept outstanding agreements (available in your Tesla
					app within 24 hours of your delivery appointment).
				</p>

				<p>Where can I find the latest updates on my delivery timing?</p>
				<p>
					Your Tesla Account will be the source of truth for your delivery
					timing after placing your order. Delivery timing estimates are subject
					to change, and your Tesla Account will always reflect the latest
					details. If you need a car sooner than your delivery estimate,{' '}
					<Link to='/shop'>explore our existing inventory options.</Link>
				</p>
			</div>
		</div>
	)
}

export default Contact

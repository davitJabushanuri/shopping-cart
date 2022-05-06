import React from 'react'

const ErrorModal = ({ setDisplayModal }) => {
	const closeModal = () => {
		setDisplayModal(false)
	}

	return (
		<div className='error-modal'>
			<div className='error-text'>
				<p>Item is already on your cart</p>
				<button onClick={closeModal}>x</button>
			</div>
		</div>
	)
}

export default ErrorModal

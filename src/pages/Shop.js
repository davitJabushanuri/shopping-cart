import React, { useContext, useState } from 'react'
import carsArray from '../Helpers/carsArray'
import cartContext from '../Helpers/cartContext'
import ErrorModal from '../components/ErrorModal'

const Shop = () => {
	const { cart, setCart, setCount } = useContext(cartContext)
	const [displayModal, setDisplayModal] = useState(false)

	const addToCart = item => {
		if (cart.includes(item)) {
			setDisplayModal(true)
		} else setCart([...cart, item])
	}

	const incrementQuantity = item => {
		const car = carsArray.find(car => car.id === item.id)
		car.quantity++
		console.log(car.quantity)
		setCount(prev => prev + 1)
		
	}

	const decrementQuantity = (item) => {
		const car = carsArray.find(car => car.id === item.id)
		if(car.quantity === 1) return
		car.quantity--
		console.log(car.quantity)
		setCount(prev => prev + 1)
	}

	return (
		<div className='shop'>
			<div className='items'>
				{displayModal && <ErrorModal setDisplayModal={setDisplayModal} />}
				{carsArray.map(item => {
					return (
						<div key={item.id} className='item'>
							<h2 className='model'>{item.model}</h2>
							<div className='img-container'>
								<img className='car-image' src={item.img} alt={item.model} />
							</div>
							<div className='info-container'>
								<div className='top-speed '>
									<p className='specs'>{item.topSpeed}mph</p>
									<p className='description'>Top Speed</p>
								</div>
								<div className='hp'>
									<p className='specs'>{item.hp}hp</p>
									<p className='description'>Peak Power</p>
								</div>
								<div className='range'>
									<p className='specs'>{item.range}mi</p>
									<p className='description'>Range</p>
								</div>
								<div className='acceleration'>
									<p className='specs'>{item.acceleration}s</p>
									<p className='description'>0-60 mph</p>
								</div>
							</div>
							<div className='price-container'>
								<p className='price'>${item.price}</p>
							</div>
							<div className='quantity-container'>
								<button
									onClick={() => incrementQuantity(item)}
									className='increment'
								>
									+
								</button>
								<p id='quantity-input'>Quantity {item.quantity}</p>
								
								<button onClick={() => decrementQuantity(item)} className='decrement'>
									-
								</button>
							</div>
							<button onClick={() => addToCart(item)} className='add-to-cart'>
								Add to Cart
							</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Shop

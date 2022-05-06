import React, { useContext, useState } from 'react'
import carsArray from '../Helpers/carsArray'
import cartContext from '../Helpers/cartContext'
import ErrorModal from '../components/ErrorModal'

const Shop = () => {
	const [shop, setShop] = useState(carsArray)
	const { cart, setCart } = useContext(cartContext)
	const [displayModal, setDisplayModal] = useState(false)
	const [quantity, setQuantity] = useState(1)

	const addToCart = item => {
		if (cart.includes(item)) {
			setDisplayModal(true)
		} else setCart([...cart, item])
	}

	const incrementQuantity = item => {
		
		setShop(...(shop[shop.indexOf(item)].quantity + 1))
		setQuantity(prev => prev + 1)
		
	}

	const decrementQuantity = () => {
		if (quantity === 1) return
		setQuantity(x => Number(x) - 1)
	}

	return (
		<div className='shop'>
			<div className='items'>
				{displayModal && <ErrorModal setDisplayModal={setDisplayModal} />}
				{shop.map(item => {
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
								<input
									type='number'
									name='quantity'
									id='quantity-input'
									value={item.quantity}
									onChange={e => setQuantity(e.target.value)}
								/>
								<button onClick={decrementQuantity} className='decrement'>
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

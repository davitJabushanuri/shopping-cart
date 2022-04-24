import React, { useContext } from 'react'
import cartContext from '../Helpers/cartContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
	const { cart } = useContext(cartContext)
	return (
		<nav>
			<div className='logo-container'>
				<Link className='logo' to='/'>
					TESLA
				</Link>
			</div>
			<div className='navbar'>
				<Link className='link' to='/'>
					Home
				</Link>
				<Link className='link' to='/shop'>
					Shop
				</Link>
				<Link className='link' to='/about'>
					About
				</Link>
				<Link className='link' to='/contact'>
					Contact
				</Link>
			</div>

			<div className='cart'>
				<Link className='link' to='/shopping-cart'>
					<FontAwesomeIcon icon={faBagShopping} />
				</Link>
				{cart.length > 0 && (
					<p className='shopping-cart-counter'>{cart.length}</p>
				)}
			</div>
		</nav>
	)
}

export default Navbar

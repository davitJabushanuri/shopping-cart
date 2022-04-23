import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav>
			<div className='logo'>Logo</div>
			<div className='navbar'>
				<Link to='/'>Home</Link>
				<Link to='/products'>Products</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
				<Link to='/favorites'>Favorites</Link>
				<Link to='/shopping-cart'>Shopping Cart</Link>
			</div>
		</nav>
	)
}

export default Navbar

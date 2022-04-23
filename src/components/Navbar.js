import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHome,
	faBagShopping,
	faHeart,
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
	return (
		<nav>
			<div className='logo'>Logo</div>
			<div className='navbar'>
				<Link className='link' to='/'>
					<FontAwesomeIcon icon={faHome} />
				</Link>
				<Link className='link' to='/products'>
					Products
				</Link>
				<Link className='link' to='/about'>
					About
				</Link>
				<Link className='link' to='/contact'>
					Contact
				</Link>
			</div>

			<div className='cart'>
				<Link className='link' to='/favorites'>
					<FontAwesomeIcon icon={faHeart} />
				</Link>
				<Link className='link' to='/shopping-cart'>
					<FontAwesomeIcon icon={faBagShopping} />
				</Link>
			</div>
		</nav>
	)
}

export default Navbar

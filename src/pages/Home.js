import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div className='home'>
			<div className='hero'>
				<div className='heading'>
					<h1>Model 3</h1>
					<p>
						Order Online for <Link to='/about'>Touchless Delivery</Link>
					</p>
				</div>
				<div className='action-buttons'>
					<button className='call-to-action black'>CUSTOM ORDER</button>
					<button className='call-to-action'>
						<Link className='link' to='/shop'>
							EXISTING INVENTORY
						</Link>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home

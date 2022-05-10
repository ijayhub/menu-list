import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({title}) => {
    return (
			<div>
				{' '}
				<div className=''>
					<h1 className='header'>{title}</h1>
					<div className=' line underline'></div>
				</div>
				<div className='d-flex justify-content-center m-4 '>
					<Link to='/' className='text-decoration-none'>
						<div className='mx-3 nav-list p-3'>All</div>
					</Link>
					<Link to='./BreakfastMenu' className='text-decoration-none'>
						<div className='mx-3 nav-list p-3'>Breakfast</div>
					</Link>
					<Link to='./LunchMenu' className='text-decoration-none'>
						<div className='mx-3 nav-list p-3'>Lunch</div>
					</Link>
					<Link to='./ShakesMenu' className='text-decoration-none'>
						<div className='mx-3 nav-list p-3 '>Shakes</div>
					</Link>
					<Link to='./Snack' className='text-decoration-none'>
						<div className='mx-3 nav-list p-3 '>Snacks</div>
					</Link>
				</div>
			</div>
		);
}

export default Navigation
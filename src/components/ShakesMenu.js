import React from 'react';
import MenuList from './MenuList';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

const ShakesMenu = () => {
	const { data: menus } = useFetch('http://localhost:3000/menus');
	return (
		<div>
			<div className='container'>
				<Link to='/'>
					{' '}
					<button className='btn-menu m-4'>Back to HomePage</button>
				</Link>
				{menus && (
					<MenuList menus={menus.filter((menu) => menu.type === 'Shakes')} />
				)}
			</div>
		</div>
	);
};

export default ShakesMenu;

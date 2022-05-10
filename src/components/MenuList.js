import React from 'react'

const MenuList = ({menus}) => {
    return (
			<div>
				<div className='container d-flex justify-content-center'>
					<div className='row mt-5 slide-in-elliptic-top-fwd'>
						{menus.map((menu) => (
							<div className='col-md-6' key={menu.id}>
								<div className='menu-container d-flex mb-3'>
									<img
										src={menu.img}
										alt=''
										className='menu-img'
										style={{ objectFit: 'cover' }}
									/>
									<div className='mx-5 w-100 menu-titlePara'>
										<h5 className='menu-title'>
											{menu.title}{' '}
											<span className='menu-price float-end'>{menu.price}</span>
											<div className='menu-line'>
												-----------------------------------------
											</div>
										</h5>

										<p className='para-menu'>{menu.para}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
}

export default MenuList

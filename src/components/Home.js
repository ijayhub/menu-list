
import MenuList from './MenuList'
import Navigation from './Navigation'
import useFetch from './useFetch';


const Home = () => {
   const { data:menus, isPending, error } = useFetch('http://localhost:8000/menus'); 
    
   
    return (
			<div>
				<Navigation title='Our Menu' />
				{error && <div>{error}</div>}
				{isPending && (
					<div className='text-center fw-bold display-3'>Loading....</div>
				)}
                {menus && <MenuList menus={menus}/>}
			</div>
		);
}

export default Home
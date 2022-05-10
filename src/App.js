import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import BreakfastMenu from "./components/BreakfastMenu";
import LunchMenu from "./components/LunchMenu";
import ShakesMenu from "./components/ShakesMenu";
import Snack from "./components/Snack";

function App() {
  return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='BreakfastMenu' element={<BreakfastMenu />}></Route>
				<Route path='LunchMenu' element={<LunchMenu />}></Route>
				<Route path='ShakesMenu' element={<ShakesMenu />}></Route>
				<Route path='Snack' element={<Snack />}></Route>
			</Routes>
		</div>
	);
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainPage, Comics } from '../pages'
import AppHeader from "../appHeader/AppHeader";


const App = () => {
	return (
		<BrowserRouter basename='/marvel-starter'>
			<div className='app'>
				<AppHeader />
				<main>
					<Routes>
						<Route
							path=''
							element={<MainPage />}
						/>
						<Route
							path='comics'
							element={<Comics />}
						/>
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;

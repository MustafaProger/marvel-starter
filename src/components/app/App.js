import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainPage, Comics, Page404, SingleComisPage } from "../pages";
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
						<Route
							path='comics/:comicId'
							element={<SingleComisPage />}
						/>
						<Route
							path='*'
							element={<Page404 />}
						/>
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;

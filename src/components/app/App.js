import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// import { MainPage, Comics, SingleComisPage } from "../pages";

import AppHeader from "../appHeader/AppHeader";

import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComisPage = lazy(() => import("../pages/SingleComisPage"));

const App = () => {
	return (
		<BrowserRouter basename='/marvel-starter'>
			<div className='app'>
				<AppHeader />
				<main>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route
								path=''
								element={<MainPage />}
							/>
							<Route
								path='comics'
								element={<ComicsPage />}
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
					</Suspense>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;

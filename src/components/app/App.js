import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundery from "../errorBoundery/ErrorBoundery";

import decoration from "../../resources/img/vision.png";
import ComicsList from "../comicsList/ComicsList";

const App = () => {
	const [selectedChar, setSelectedChar] = useState(null);

	return (
		<BrowserRouter basename='/marvel-starter'>
			<div className='app'>
				<AppHeader />
				<main>
					<Routes>
						<Route
							path='characters'
							element={
								<>
									<ErrorBoundery>
										<RandomChar />
									</ErrorBoundery>
									<div className='char__content'>
										<ErrorBoundery>
											<CharList onCharSelected={setSelectedChar} />
										</ErrorBoundery>
										<ErrorBoundery>
											<CharInfo charId={selectedChar} />
										</ErrorBoundery>
									</div>
								</>
							}
						/>
						<Route
							path='comics'
							element={<ComicsList/>}
						/>
					</Routes>

					<img
						className='bg-decoration'
						src={decoration}
						alt='vision'
					/>
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;

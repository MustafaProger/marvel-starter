import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundery from "../errorBoundery/ErrorBoundery";

import decoration from "../../resources/img/vision.png";

const App = () => {
	const [selectedChar, setSelectedChar] = useState(null);

	return (
		<div className='app'>
			<AppHeader />
			<main>
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
				<img
					className='bg-decoration'
					src={decoration}
					alt='vision'
				/>
			</main>
		</div>
	);
};

export default App;

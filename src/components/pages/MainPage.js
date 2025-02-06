import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundery from "../errorBoundery/ErrorBoundery";

import decoration from "../../resources/img/vision.png";

const MainPage = () => {
	const [selectedChar, setSelectedChar] = useState(null);

	return (
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
			<img
				className='bg-decoration'
				src={decoration}
				alt='vision'
			/>
		</>
	);
};

export default MainPage;

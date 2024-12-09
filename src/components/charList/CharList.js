/* eslint-disable jsx-a11y/img-redundant-alt */
import "./charList.scss";
// import abyss from "../../resources/img/abyss.jpg";
import MarvelService from "../../services/MarvelService";
import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

class CharList extends Component {
	state = {
		characters: [],
		loading: true,
		error: false,
	};

	marvelService = new MarvelService();

	componentDidMount() {
		this.marvelService
			.getAllCharacters()
			.then(this.onCharsLoaded)
			.catch(this.onError);
	}

	onCharsLoaded = (characters) => {
		this.setState({ loading: false, characters });
	};

	onError = () => {
		this.setState({ loading: false, error: true });
	};

	render() {
		const { characters, loading, error } = this.state;

		const arrChars = characters;

		const errorMessage = error ? <ErrorMessage /> : null;
		const spinner = loading ? <Spinner /> : null;

		return (
			<div className='char__list'>
				{errorMessage}
				{spinner}
				<ul className='char__grid'>
					{arrChars && !errorMessage && !spinner
						? arrChars.map((item) => (
								<Character
									key={item.id}
									name={item.name}
									img={item.thumbnail}
								/>
						  ))
						: null}
				</ul>
				<button className='button button__main button__long'>
					<div className='inner'>load more</div>
				</button>
			</div>
		);
	}
}

const Character = ({ name, img }) => {
	return (
		<li className='char__item'>
			<img
				src={img}
				alt='image character'
			/>
			<div className='char__name'>{name}</div>
		</li>
	);
};

export default CharList;

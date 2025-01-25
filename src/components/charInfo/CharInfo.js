/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./charInfo.scss";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useMarvelService from "../../services/MarvelService";

const CharInfo = (props) => {
	const [char, setChar] = useState(null);

	const { loading, error, getCharacterById, clearError } = useMarvelService();

	useEffect(() => {
		updateChar();
	}, []);

	useEffect(() => {
		updateChar();
	}, [props.charId]);

	const onCharLoaded = (char) => {
		setChar((prevChar) => char);
	};

	const onCharLoading = () => {
		scrollToInpo();
	};

	const updateChar = () => {
		clearError();

		const { charId } = props;
		if (!charId) {
			return;
		}

		getCharacterById(charId).then(onCharLoaded);
	};

	const scrollToInpo = () => {
		const info = document.querySelector(".char__info");
		if (info) {
			// Получаем позицию первого элемента
			const targetPosition =
				info.getBoundingClientRect().top + window.pageYOffset;
			const startPosition = window.pageYOffset;
			const distance = targetPosition - startPosition - 100; // Учитываем отступ 100px для navbar
			const duration = 1000;
			let startTime = null;

			const ease = (t, b, c, d) => {
				t /= d / 2;
				if (t < 1) return (c / 2) * t * t + b;
				t--;
				return (-c / 2) * (t * (t - 2) - 1) + b;
			};

			const scrollAnimation = (currentTime) => {
				if (startTime === null) startTime = currentTime;
				const timeElapsed = currentTime - startTime;
				const run = ease(timeElapsed, startPosition, distance, duration);
				window.scrollTo(0, run);
				if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
			};

			requestAnimationFrame(scrollAnimation);
		}
	};

	const skeleton = char || loading || error ? null : <Skeleton />;
	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading ? <Spinner /> : null;
	const content = !(loading || error || !char) ? <View char={char} /> : null;

	return (
		<div className='char__info'>
			{skeleton}
			{errorMessage}
			{spinner}
			{content}
		</div>
	);
};

const View = ({ char }) => {
	const { name, description, thumbnail, homepage, wiki, comics } = char;

	let imgStyle = { objectFit: "cover" };
	if (
		thumbnail ===
		"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
	) {
		imgStyle = { objectFit: "unset" };
	}

	const charDescr =
		comics.available === 0 ? (
			<li
				key={0}
				className='char__comics-item'>
				The character has no comics
			</li>
		) : (
			comics.items.map(({ name }, i) => {
				if (i < 10) {
					return (
						<li
							key={i}
							className='char__comics-item'>
							{name}
						</li>
					);
				}
			})
		);

	return (
		<>
			<div className='char__basics'>
				<img
					src={thumbnail}
					alt='Image character'
					style={imgStyle}
				/>
				<div>
					<div className='char__info-name'>{name}</div>
					<div className='char__btns'>
						<a
							href={homepage}
							className='button button__main'>
							<div className='inner'>homepage</div>
						</a>
						<a
							href={wiki}
							className='button button__secondary'>
							<div className='inner'>Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className='char__descr'>{description}</div>
			<div className='char__comics'>Comics:</div>
			<ul className='char__comics-list'>{charDescr}</ul>
		</>
	);
};

CharInfo.propTypes = {
	charId: PropTypes.number,
};

export default CharInfo;

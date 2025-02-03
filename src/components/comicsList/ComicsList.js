
import { useCallback, useEffect, useState } from "react";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";

import "./comicsList.scss";

const ComicsList = () => {
	const [comics, setComics] = useState([]);
	const [offset, setOffset] = useState(210);
	const [initialItemsLoading, setInitialItemsLoading] = useState(true);
	const { loading, getComics } = useMarvelService();

	const accessingApi = useCallback(async () => {
		try {
			const comics = await getComics(offset);
			setComics((prevComics) => [...prevComics, ...comics]);
			setInitialItemsLoading(false);
		} catch (error) {
			console.error("Ошибка при загрузке данных:", error);
		}
	}, [offset]);

	useEffect(() => {
		accessingApi();
	}, [accessingApi]);

	const handleLoadMore = () => {
		setOffset((prevOffset) => prevOffset + 8);
	};

	return (
		<div className='comics__list'>
			{initialItemsLoading ? <Spinner /> : null}
			<ul className='comics__grid'>
				{comics.map((comic) => (
					<li
						className='comics__item'
						key={comic.id}>
						<a href='#'>
							<img
								src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
								alt={comic.title}
								className='comics__item-img'
							/>
							<div className='comics__item-name'>{comic.title}</div>
							<div className='comics__item-price'>
								{comic.prices[0].price
									? `${comic.prices[0].price}$`
									: "NOT AVAILABLE"}
							</div>
						</a>
					</li>
				))}
			</ul>
			<button
				className='button button__main button__long'
				onClick={handleLoadMore}
				disabled={loading}>
				<div className='inner'>{loading ? "Loading..." : "Load More"}</div>
			</button>
		</div>
	);
};

export default ComicsList;

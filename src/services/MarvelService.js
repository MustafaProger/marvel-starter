import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
	const { loading, request, error, clearError } = useHttp();

	const _apiBase = "https://gateway.marvel.com:443/v1/public/";
	const _apiKey = "apikey=58a1c7f15ef58395ab52a6c63927a461";
	const _ts = "ts=1738563207400";
	const _hash = "hash=d5ecccf7ee705be62d227e32dc2a3a47";
	const _baseOffset = 210;

	const getAllCharacters = async (offset = _baseOffset) => {
		const res = await request(
			`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
		);
		return res.data.results.map(_transformCharacter);
	};

	const getCharacterById = async (id) => {
		const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
		return _transformCharacter(res.data.results[0]);
	};

	const getAllComics = async (offset = _baseOffset) => {
		const data = await request(
			`${_apiBase}/comics?${_ts}&${_apiKey}&${_hash}&offset=${offset}&limit=8`
		);
		return data.data.results;
		// return data.data.results.map(_transformComics);
	};

	const getComicById = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	};

	const _transformCharacter = (char) => {
		return {
			id: char.id,
			name: char.name,
			description:
				char.description !== ""
					? char.description.length > 182
						? char.description.slice(0, 182) + "..."
						: char.description
					: char.description + "The character has no description",
			thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			comics: char.comics,
		};
	};

	const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} page`
				: "No information about the number of pages",
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
		};
	};

	return {
		loading,
		error,
		getAllCharacters,
		getCharacterById,
		getAllComics,
		getComicById,
		clearError,
	};
};

export default useMarvelService;

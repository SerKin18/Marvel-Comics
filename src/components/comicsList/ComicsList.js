import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './comicsList.scss';
import Spinner from '../spinner/Spinner';
import ErrorMessege from '../errorMessage/ErrorMessege';
import useMarvelService from '../../services/MarvelService';


const ComicsList = () => {
	const [comicsList, setComicsList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(false);
	const [comicsEnded, setComicsEnded] = useState(false);

	const { loading, error, getAllcomics } = useMarvelService();

	useEffect(() => {
		onRequest(offset, true)
	}, [])

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true)
		getAllcomics(offset)
			.then(onComicsListLoaded)
	};
	const onComicsListLoaded = (newComicsList) => {
		let ended = false;
		if (newComicsList.length < 8) {
			ended = true
		}
		setComicsList([...comicsList, ...newComicsList])
		setNewItemLoading(false);
		setOffset(offset + 8)
		setComicsEnded(ended)
	}
	function renderItems(arr) {
		const items = arr.map((item, i) => {
			return (
				<li className="comics__item" key={i}>
					<Link to={`/comics/${item.id}`}>
						<img src={item.thumbnail} alt={item.title} className="comics__item-img" />
						<div className="comics__item-name">{item.title}</div>
						<div className="comics__item-price">{item.price}</div>
					</Link>
				</li>
			)
		})
		return (
			<ul className="comics__grid">
				{items}
			</ul>
		)
	}
	const items = renderItems(comicsList)
	const errorMessege = error ? <ErrorMessege /> : null;
	const spiner = loading && !newItemLoading ? <Spinner /> : null;




	return (
		<div className="comics__list">
			{errorMessege}
			{spiner}
			{items}
			<button className="button button__main button__long"
			disabled={newItemLoading}
			style={{'display': comicsEnded ? 'none':'block'}}
			onClick={()=>onRequest(offset)}>
				<div className="inner">load more</div>
			</button>
		</div>
	)
}

export default ComicsList;
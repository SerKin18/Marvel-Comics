import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import Spinner from '../spinner/Spinner';
import ErrorMessege from '../errorMessage/ErrorMessege';
import useMarvelService from '../../services/MarvelService';
import './charList.scss';

const CharList = (props) => {
	const [charList, setCharList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(400);
	const [charEnded, setCharEnded] = useState(false);
	const { loading, error, getAllCharacters } = useMarvelService();

	useEffect(() => { onRequest(offset,true) }, [])
	// componentDidMount() {
	// 	this.onRequest();
	// }

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true)
		getAllCharacters(offset)
			.then(onCharListLoaded)

	};


	const onCharListLoaded = (newCharList) => {
		let ended = false;
		if (newCharList.length < 9) {
			ended = true
		}

		// this.setState(({ offset, charList, }) => ({
		// 	charList: [...charList, ...newCharList],
		// 	loading: false,
		// 	newItemLoading: false,
		// 	offset: offset + 9,
		// 	charEnded: ended
		// }))
		setCharList(() => [...charList, ...newCharList]);
		// setLoading(loading => false);
		setNewItemLoading(false)
		setOffset(offset => offset + 9);
		setCharEnded(charEnded => ended)
	}

	// const onError = () => {
	// 	// this.setState({
	// 	// 	error: true,
	// 	// 	loading: false
	// 	// })
	// 	setError(true);
	// 	setLoading(false)
	// }

	const itemRef = useRef([]);
	// setRef = (ref) => {
	// 	this.itemRef.push(ref)
	// }
	const focusOnItem = (id) => {
		itemRef.current.forEach((item) => item.classList.remove('char__item_selected'));
		itemRef.current[id].classList.add('char__item_selected');
		itemRef.current[id].focus()
	}


	function renderItems(arr) {
		const items = arr.map((item, i) => {
			let imgStyle = { 'objectFit': 'cover' };
			if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
				imgStyle = { 'objectFit': 'unset' };
			}

			return (
				<li
					className="char__item"
					tabIndex={0}
					// ref={this.setRef}
					ref={el => itemRef.current[i] = el}
					key={item.id}
					onClick={() => {
						props.onCharSelected(item.id)
						focusOnItem(i)
					}}>
					<img src={item.thumbnail} alt={item.name} style={imgStyle} />
					<div className="char__name">{item.name}</div>
				</li>
			)
		});

		return (
			<ul className="char__grid">
				{items}
			</ul>
		)
	}


	// const { charList, loading, error, offset, newItemLoading, charEnded } = this.state;
	const items = renderItems(charList)
	const errorMessege = error ? <ErrorMessege /> : null;
	const spiner = loading && !newItemLoading ? <Spinner /> : null;
	return (
		<div className="char__list">
			{errorMessege}
			{spiner}
			{items}
			<button
				className="button button__main button__long"
				disabled={newItemLoading}
				style={{ 'display': charEnded ? 'none' : 'block' }}
				onClick={() => onRequest(offset)}>
				<div className="inner">load more</div>
			</button>
		</div>
	)
}

CharList.propTypes = {
	onCharSelected: PropTypes

}

export default CharList;
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessege from '../errorMessage/ErrorMessege';
import Skeleton from '../skeleton/Skeleton'
import './charInfo.scss';


const CharInfo = (props) => {

	const [char, setChar] = useState(null);

	// state = {
	// 	char: null,
	// 	loading: false,
	// 	error: false,
	// }
	const {loading,error,getCharacter,clearError} = useMarvelService();

	// componentDidMount() {
	// 	this.updateChar();
	// }
	useEffect(() => {
		updateChar();
	}, [props.charId])

	// componentDidUpdate(prevProps) {
	// 	if (this.props.charId !== prevProps.charId) {
	// 		this.updateChar();
	// 	}
	// }


	const updateChar = () => {
		clearError();
		const { charId } = props;
		if (!charId) {
			return;
		}

		getCharacter(charId)
			.then(onCharLoaded)


	}


	const onCharLoaded = (char) => {
		// this.setState({ char, loading: false })
		setChar(char);

	}




	const skeleton = char || loading || error ? null : <Skeleton />

	const errorMessege = error ? <ErrorMessege /> : null;
	const spiner = loading ? <Spinner /> : null;
	const content = !(loading || error || !char) ? <View char={char} /> : null

	return (
		<div className="char__info">
			{skeleton}
			{errorMessege}
			{spiner}
			{content}
		</div>
	)
}

const View = ({ char }) => {
	const { name, description, thumbnail, homepage, wiki, comics } = char
	let imgStyle = { 'objectFit': 'cover' };
	if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
		imgStyle = { 'objectFit': 'unset' }
	}

	return (
		<>
			<div className="char__basics">
				<img src={thumbnail} alt={name} style={imgStyle} />
				<div>
					<div className="char__info-name">{name}</div>
					<div className="char__btns">
						<a href={homepage} className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href={wiki} className="button button__secondary">
							<div className="inner">wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className="char__descr">
				{description}
			</div>
			<div className="char__comics">Comics:</div>
			<ul className="char__comics-list">
				{comics.length > 0 ? null : 'there is no comics with this characters'}
				{
					comics.map((item, i) => {
						// eslint-disable-next-line
						if (i > 9) return;
						return (
							<li key={i} className="char__comics-item">
								{item.name}
							</li>
						)
					})
				}
			</ul>
		</>
	)

}
CharInfo.propTypes = {
	charId: PropTypes.string
}

export default CharInfo;
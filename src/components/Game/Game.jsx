import { useDispatch } from 'react-redux';
import { deleteGame } from '../../redux/actions';
import './Game.css';

const Game = ({ name, icon_url, id }) => {
	const dispatch = useDispatch();

	function deleteHandler() {
		dispatch(deleteGame(id));
	};

	return (
		<div className="card flex-row align-items-center px-2 mb-2">
			{icon_url && (
				<img src={icon_url} className="card-img-top game-icon" width={'80px'} height={'80px'} alt="game icon" />
			)}

			<h5 className="card-title text-center w-100">
				{name}
			</h5>
			<button
				type="button"
				className="btn btn-danger"
				onClick={deleteHandler}
			>&times;</button>
		</div>
	);
};

export default Game;
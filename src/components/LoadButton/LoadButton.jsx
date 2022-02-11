import { useDispatch } from "react-redux";
import { loadGames } from "../../redux/actions";

const LoadButton = () => {


	const dispatch = useDispatch();

	function loadHandler() {
		dispatch(loadGames());
	};

	return (
		<button
			type="button"
			className="btn btn-warning col-2"
			onClick={loadHandler}
		>Load games</button>
	);
};

export default LoadButton;
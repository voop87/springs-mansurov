import Game from "../Game/Game";
import './GameList.css';

const GameList = ({ games }) => {

	return (
		<ul>
			{!games.length && <p className='fs-1 text-center text-warning'>Here is no games, yet..</p>}

			{!!games.length && games.map(game => {
				return (
					<li key={game.id}>
						<Game id={game.id} name={game.name} icon_url={game.icon_url} />
					</li>
				);
			})
			}
		</ul>
	);
};

export default GameList;
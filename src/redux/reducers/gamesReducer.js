import { ADD_GAME, DELETE_GAME, LOAD_GAMES } from "../types";

const initialState = {
	games: [
		{
			id: 1,
			icon_url: 'https://lh3.googleusercontent.com/cz-P6elsDLzExhnSHzRKbSmfhIFGm203Fe9qFDpnkEpMWovLpUa6ni9b24YzVq0R2II4',
			name: '2 For 2: Connect the Numbers Puzzle'
		},
		{
			id: 2,
			icon_url: 'https://lh3.googleusercontent.com/cz-P6elsDLzExhnSHzRKbSmfhIFGm203Fe9qFDpnkEpMWovLpUa6ni9b24YzVq0R2II4',
			name: 'Connect the Numbers Puzzle'
		},
		{
			id: 3,
			icon_url: 'https://lh3.googleusercontent.com/cz-P6elsDLzExhnSHzRKbSmfhIFGm203Fe9qFDpnkEpMWovLpUa6ni9b24YzVq0R2II4',
			name: '2 Puzzle'
		}
	],
}

export const gamesReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_GAME:
			return {
				...state,
				games: [...state.games, action.data]
			}
		case DELETE_GAME:
			const { data } = action;
			const { games } = state;
			const itemIndex = games.findIndex(game => game.id === data.id);

			const nextGames = [
				...games.slice(0, itemIndex),
				...games.slice(itemIndex + 1)
			];

			return {
				...state,
				games: nextGames
			}
		case LOAD_GAMES:
			return {
				...state,
				games: [...state.games, ...action.data]
			}
	
		default:
			return state;
	}
};
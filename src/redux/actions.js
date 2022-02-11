import uniqid from 'uniqid';

import { 
	ADD_GAME, 
	DELETE_GAME,
	LOAD_GAMES,
	apiUrl 
} from "./types";

export const addGame = (name, id, icon_url) => {
	return {
		type: ADD_GAME,
		data: {
			name,
			id,
			icon_url
		}
	}
};

export const deleteGame = (id) => {
	return {
		type: DELETE_GAME,
		data: {
			id
		}
	}
};

export const loadGames = () => {
	return async dispatch => {
		const response = await fetch(apiUrl);
		const jsonData = await response.json();
		jsonData.data.forEach(game => {
			const id = uniqid();
			game.id = id;
		});
		dispatch({
			type: LOAD_GAMES,
			data: jsonData.data
		});
	} 
	
};
import { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from 'uniqid';

import { addGame } from "../../redux/actions";

const AddGameForm = () => {
	const [name, setName] = useState('');
	const [icon_url, setIcon_url] = useState('');

	const dispatch = useDispatch();

	function titleChangeHandler(e) {
		setName(e.target.value);
	};

	function iconChangeHandler(e) {
		let file = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onload = function () {
			setIcon_url(reader.result);
		};
	}

	function submitHandler(e) {
		e.preventDefault();
		if (!name) {
			return;
		}

		const id = uniqid();
		dispatch(addGame(name, id, icon_url));
		setName('');
		setIcon_url('');
	};

	return (
		<form onSubmit={submitHandler} className='mb-3 game-form'>
			<input
				type="text"
				onChange={titleChangeHandler}
				value={name}
				className='form-control mb-3'
				placeholder="Game title.."
				required
			/>
			<div className="d-flex justify-content-between">
				<input
					type="file"
					onChange={iconChangeHandler}
					className="btn btn-secondary"
					accept=".png, .jpg, .jpeg, .ico"
				/>
				<button type="submit" className="btn btn-info">Add game</button>
			</div>

		</form>
	);
};

export default AddGameForm;
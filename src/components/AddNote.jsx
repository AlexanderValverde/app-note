import React, { useState } from 'react';
import { FiSave } from "react-icons/fi";

const AddNote = ({ handleAddNote }) => {

	const [newNote, setNewNote] = useState([]);
	const characterLimit = 50;

	const handleChange = (event) => {
		if ((characterLimit - event.target.value.length) >= 0) {
			setNewNote(event.target.value);
		}
	}

	const saveNote = () => {
		handleAddNote(newNote);
		setNewNote('');
	}

	return (
		<div className='note new-note'>
			<div className='content-new'>
				<textarea
					placeholder='Type to add a note...'
					cols="10"
					rows="8"
					value={newNote}
					className='textarea-note'
					onChange={handleChange}
				>
				</textarea>
			</div>
			<div className='footer-note'>
				<div className='typing-note'>
					<small className={characterLimit - newNote.length === 0 ? 'count active' : 'count'}>{characterLimit - newNote.length} Remaining</small>
				</div>
				<div className='icon-note'>
					<FiSave className='button save-icon' onClick={saveNote} />
				</div>
			</div>
		</div>
	)
}

export default AddNote
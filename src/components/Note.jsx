import React from 'react';
import { MdDeleteForever } from "react-icons/md";

const Note = ({ idnote, textnote, datenote, handleDeleteNote }) => {

	return (
		<div className='note'>
			<div className='title-note'>
				<span className='text'>{textnote}</span>
			</div>
			<div className="footer-note">
				<div className='date-note'><span className='date'>{datenote}</span></div>
				<div className='icon-note'>
					<MdDeleteForever className='button delete-icon' onClick={() => handleDeleteNote(idnote)} />
				</div>
			</div>
		</div>
	)
}

export default Note
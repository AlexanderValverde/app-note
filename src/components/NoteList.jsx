import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

const NoteList = ({ notes, handleAddNote, handleDeleteNote, showAddNote }) => {
  return (
    <div className='notes-list'>
      {!showAddNote && <AddNote handleAddNote={handleAddNote} />}
      {notes.map( (note) => (
          <Note 
            key={note.id} 
            idnote={note.id} 
            textnote={note.text} 
            datenote={note.date} 
            handleDeleteNote={handleDeleteNote} 
          />
      ))}
    </div>
  )
}

export default NoteList;
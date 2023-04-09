import { useState, useEffect } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import { v4 as uuidv4 } from "uuid";
import TitleApp from './components/TitleApp';
import { Search } from './components/Search';

function App() {
  
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);
  const [showAddNote, setShowAddNote] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-data'));
    const savedTheme = JSON.parse(localStorage.getItem('theme'));
    if (savedNotes) {
      setNotes(savedNotes);
    } else {
      setNotes([]);
    }
    if (savedTheme === true) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
    
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('notes-data', JSON.stringify(notes))
    }, 0);
  }, [notes]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('theme', JSON.stringify(darkTheme))
    }, 0);
  }, [darkTheme]);

  function AddNote(text) {
    if (text.length > 0) {
      const date = new Date();
      const newNote = {
        id: uuidv4(),
        text: text,
        date: date.toLocaleDateString()
      }
      setNotes([...notes, newNote]);
    }
  }

  function deleteNote(idnote) {
    const newNotes = notes.filter(
      (note) => note.id !== idnote
    );
    setNotes(newNotes);
  }

  function handleSearch(text) {
    setSearchText(text);
    if (text !== '') {
      setShowAddNote(true);
    } else {
      setShowAddNote(false);
    }
  }

  return (
    <div className={ darkTheme === true ? "main dark-theme" : "main sun-theme" }>
      <div className="container">
        <TitleApp handleTheme={setDarkTheme} darkTheme={darkTheme} />
        <Search handleSearch={handleSearch} />
        <NoteList 
          notes={notes.filter( (note) => note.text.toLowerCase().includes(searchText) )} 
          handleAddNote={AddNote} 
          handleDeleteNote={deleteNote} 
          showAddNote={showAddNote}
        />
      </div>
    </div>
  
  );
}

export default App;

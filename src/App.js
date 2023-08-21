import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import MusicData from './Components/MusicData/MusicData';
import FilterMusic from './Components/FilterMusic/FilterMusic';
import EditForm from './Components/EditForm/EditForm';
import AddEntryForm from './Components/AddEntryForm/AddEntryForm';

function App() {
  const [editSong, setEditSong] = useState(null);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [filterText, setFilterText] = useState('');


  const handleEdit = (song) => {
    setEditSong(song);
  };

  const handleEditClose = () => {
    setEditSong(null);
  };

  const handleAdd = () => {
    setIsAddModalVisible(true);
  };

  const handleAddClose = () => {
    setIsAddModalVisible(false);
  };

  const handleFilterChange = (newFilterText) => {
    setFilterText(newFilterText);
  };

  return (
    <div>
      <NavBar />
      <br />
      <div className='table-form'>
      <AddEntryForm onClose={handleAddClose} className='add-entry-form' />
      <br />
      <MusicTable 
        onEdit={handleEdit} 
        filterText={filterText} 
        onFilterChange={handleFilterChange}
        className='music-table' 
      />
      </div>
      <br />
      <div className='footer'>
      <Footer />
      </div>
    </div>
  );
}

export default App;

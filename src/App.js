import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import MusicData from './Components/MusicData/MusicData';
import FilterMusic from './Components/FilteredMusic/FilteredMusic';
import EditForm from './Components/EditForm/EditForm';

function App() {
  const [editSong, setEditSong] = useState(null);
  // const [filteredSongs, setFilteredSongs] = useState(MusicData);

  // const handleFilter = (filterText) => {
  //   const filtered = MusicData.filter(
  //     (song) =>
  //       song.title.toLowerCase().includes(filterText.toLowerCase()) ||
  //       song.artist.toLowerCase().includes(filterText.toLowerCase())
  //   );
  //   setFilteredSongs(filtered);
  // };

  
  const handleEdit = (song) => {
    setEditSong(song);
  };

  const handleEditClose = () => {
    setEditSong(null);
  };
  
  return (
    <div>
      <NavBar />
      {/* <FilterMusic onFilter={handleFilter} /> */}
      {/* <MusicTable songs={filteredSongs} /> */}
      <MusicTable onEdit={handleEdit} />
      {editSong && (
        <EditForm song={editSong} onClose={handleEditClose} />
      )}
      <Footer />
    </div>
  );
}

export default App;

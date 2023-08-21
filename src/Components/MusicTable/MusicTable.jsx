import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './MusicTable.css';
import FilterMusic from '../FilterMusic/FilterMusic';



function MusicTable({ onEdit, filterText, onFilterChange }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data)
  }

  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className='table'>
      <h2>Music Library</h2>
      <FilterMusic 
        filterText={filterText}
        onFilterChange={handleFilterChange} 
      />
      <Table striped bordered hover variant="dark" size='sm'>
        <thead>
          <tr>
            <th>Song Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {songs
            .filter(
              (song) =>
                song.title.toLowerCase().includes(filterText.toLowerCase()) ||
                song.artist.toLowerCase().includes(filterText.toLowerCase()) ||
                song.album.toLowerCase().includes(filterText.toLowerCase()) ||
                song.genre.toLowerCase().includes(filterText.toLowerCase()) ||
                song.release_date.toLowerCase().includes(filterText.toLowerCase())
            )
            .map((song) => (
              <tr key={song.id}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <th>{song.genre}</th>
                <td>{song.release_date}</td>
                <td>
                  <button onClick={() => onEdit(song)}>Edit</button>
                </td>
              </tr>

            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MusicTable;

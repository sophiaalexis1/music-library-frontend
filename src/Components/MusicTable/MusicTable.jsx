import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './MusicTable.css';
import FilterMusic from '../FilterMusic/FilterMusic';
import EditForm from '../EditForm/EditForm';



function MusicTable({ onEdit, filterText, onFilterChange }) {
  const [songs, setSongs] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);

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
              <React.Fragment key={song.id}>
                <tr>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.album}</td>
                  <th>{song.genre}</th>
                  <td>{song.release_date}</td>
                  <td>
                    <button onClick={() => {
                      console.log("Edit button clicked")
                      onEdit(song);
                      setShowEditForm(true);
                    }}>Edit</button>
                  </td>
                </tr>
                {showEditForm && (
                  <tr key={`${song.id}-edit`}>
                    <td colSpan="6">
                      <div className="modal-backdrop modal-active">
                        <div className="modal-container">
                          <EditForm song={song} onClose={() => setShowEditForm(false)} />
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MusicTable;

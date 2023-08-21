import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './MusicTable.css';



function MusicTable({onEdit}) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  },[]);
  
  async function getAllSongs() {
      const response = await axios.get('http://127.0.0.1:8000/api/music/');
      setSongs(response.data)  
  }

  return (
    <div className='table'>
      <h2>Music Library</h2>
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
          {songs.map((song) => (
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

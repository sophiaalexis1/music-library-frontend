import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import './MusicTable.css';



function MusicTable() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  },[]);
  
  async function getAllSongs() {
      const response = await axios.get('http://127.0.0.1:8000/api/music/');
      console.log(response.data);
      setSongs(response.data)  
  }

  return (
    <div>
      <h2>Music Library</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.release_date}</td>
            </tr>

          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MusicTable;

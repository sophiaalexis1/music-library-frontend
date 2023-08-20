import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MusicData() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
      getAllSongs();
    },[]);
    
    async function getAllSongs() {
        const response = await axios.get('http://127.0.0.1:8000/api/music/');
        setSongs(response.data)  
    }

  return (
    <div>
      {songs.map((song) => (
        <div key={song.id}>
          <p>{song.title}</p>
          <p>{song.artist}</p>
          <p>{song.album}</p>
          <p>{song.genre}</p>
          <p>{song.release_date}</p>
        </div>
      ))}
    </div>
  );
}


export default MusicData;

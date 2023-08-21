import React, { useState } from 'react';
import axios from 'axios';
import './EditForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditForm({ song, onClose }) {
  const [editedSong, setEditedSong] = useState(song);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedSong((prevSong) => ({ ...prevSong, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/music/${editedSong.id}/`,
        editedSong
      );
      console.log('Song updated:', response.data);
      onClose();
    } catch (error) {
      console.error('Error updating song:', error);
    }
  };

  return (
    <div className='modal-backdrop'>
      <div className="modal-container">
        <h2>Edit Song</h2>
        <Form>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={editedSong.title}
            onChange={handleInputChange}
          />
          <Form.Label>Artist:</Form.Label>
          <Form.Control
            type="text"
            name="artist"
            value={editedSong.artist}
            onChange={handleInputChange}
          />
          <Form.Label>Album:</Form.Label>
          <Form.Control
            type="text"
            name="album"
            value={editedSong.album}
            onChange={handleInputChange}
          />
          <Form.Label>Genre:</Form.Label>
          <Form.Control
            type="text"
            name="genre"
            value={editedSong.genre}
            onChange={handleInputChange}
          />
          <Form.Label>Release Date:</Form.Label>
          <Form.Control
            type="date"
            name="release_date"
            value={editedSong.release_date}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleUpdate}>
            Update
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </Form>
      </div>
    </div>
  );
}

export default EditForm;

import React, { useState } from 'react';
import axios from 'axios';
import './AddEntryForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddEntryForm({ onClose }) {
  const [newSong, setNewSong] = useState({
    title: '',
    artist: '',
    album: '',
    genre: '',
    release_date: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewSong((prevSong) => ({ ...prevSong, [name]: value }));
  };  

  const handleAdd = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/music/',
        newSong
      );
      console.log('Song added:', response.data);
      onClose();
    } catch (error) {
      console.error('Error adding song:', error);
    }
  };

  return (
    <div className='Form'>
      <div>
        <h2>Add New Song</h2>
        <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type='text'
            name='title'
            value={newSong.title}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Artist:</Form.Label>
          <Form.Control
            type='text'
            name='artist'
            value={newSong.artist}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Album:</Form.Label>
          <Form.Control
            type='text'
            name='album'
            value={newSong.album}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Genre:</Form.Label>
          <Form.Control
            type='text'
            name='genre'
            value={newSong.genre}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Release Date:</Form.Label>
          <Form.Control
            type='date'
            name='release_date'
            value={newSong.release_date}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Button variant="primary" type='submit' onClick={handleAdd}>
            Add
          </Button>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Button variant="primary" type='submit' onClick={onClose}>
            Cancel
          </Button>
        </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default AddEntryForm;

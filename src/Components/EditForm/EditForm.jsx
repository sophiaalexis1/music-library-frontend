import React, { useState } from 'react';
import axios from 'axios';
import './EditForm.css';

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
        <form>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={editedSong.title}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleUpdate}>
            Update
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditForm;

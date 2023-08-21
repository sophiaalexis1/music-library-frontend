import React, { useState } from 'react';
import MusicData from '../MusicData/MusicData';

function FilterMusic({ filterText, onFilterChange }) {
  return (
    <div>
      <input
        type='text'
        value={filterText}
        onChange={onFilterChange}
        placeholder='Filter by title or artist...'
      />
    </div>
  );
}

export default FilterMusic;
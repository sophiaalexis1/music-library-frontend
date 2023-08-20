import React, { useState } from 'react';
import MusicData from '../MusicData/MusicData';

function FilterMusic({ onFilter }) {
    const [filterText, setFilterText] = useState('');

    const handleFilterChange = (event) => {
        const newText = event.target.value;
        setFilterText(newText);
        onFilter(newText);
    };

return (
    <div>
      <input
        type="text"
        placeholder="Filter by title or artist"
        value={filterText}
        onChange={handleFilterChange}
      />
    </div>
);
}

export default FilterMusic;
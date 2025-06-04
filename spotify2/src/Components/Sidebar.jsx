// src/components/Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='bg-gray-900 text-white w-60 p-4 flex flex-col'>
      <h1 className='text-2xl font-bold mb-4'>Spotify</h1>
      <Link to="/" className="mb-2">Home</Link>
      <Link to="/playlist/1" className="mb-2">Playlist 1</Link>
      <Link to="/playlist/2" className="mb-2">Playlist 2</Link>
      <Link to="/album/1" className="mb-2">Album 1</Link>
      <Link to="/album/2" className="mb-2">Album 2</Link>
    </div>
  );
};

export default Sidebar;

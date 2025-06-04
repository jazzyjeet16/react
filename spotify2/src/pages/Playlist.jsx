// src/pages/Playlist.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { songsData } from '../assets/assets';  // Mock data

const Playlist = () => {
  const { id } = useParams();
  
  return (
    <div className='text-white p-8'>
      <h1 className="text-3xl font-bold mb-4">Playlist {id}</h1>
      <div>
        {songsData.map((song) => (
          <div key={song.id} className="flex justify-between items-center bg-gray-900 p-3 rounded-lg mb-2">
            <div className="flex items-center gap-4">
              <img src={song.image} alt={song.name} className="w-12 h-12 rounded-md" />
              <div>
                <h3>{song.name}</h3>
                <p className="text-sm">{song.desc}</p>
              </div>
            </div>
            <p>{song.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;

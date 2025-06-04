// src/pages/Album.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { songsData, albumsData } from '../assets/assets';  // Mock data

const Album = () => {
  const { id } = useParams();
  const album = albumsData.find((album) => album.id.toString() === id);
  
  return (
    <div className='text-white p-8'>
      <div className="flex gap-6 mb-6">
        <img src={album.image} alt={album.name} className="w-60 h-60 rounded-md" />
        <div>
          <h1 className="text-3xl font-bold">{album.name}</h1>
          <p className="text-lg mt-2">{album.desc}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Songs</h2>
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

export default Album;

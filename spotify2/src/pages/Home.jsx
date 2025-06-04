// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { albumsData } from '../assets/assets';  // Import albumsData or any mock data you have

const Home = () => {
  return (
    <div className='text-white p-8'>
      <h1 className="text-2xl font-bold mb-4">Browse</h1>
      <div className="grid grid-cols-4 gap-4">
        {albumsData.map((album) => (
          <Link to={`/album/${album.id}`} key={album.id}>
            <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-700">
              <img src={album.image} alt={album.name} className="mb-2 rounded-md" />
              <h2 className="text-lg">{album.name}</h2>
              <p className="text-sm">{album.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

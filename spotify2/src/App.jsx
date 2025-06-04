// src/App.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import {Player} from './components/Player';

function App() {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />  {/* Static sidebar */}
        <div className='flex-grow'>
          <Outlet />  {/* Dynamic content for different routes */}
        </div>
      </div>
      <Player />  {/* Static player at the bottom */}
    </div>
  );
}

export default App;

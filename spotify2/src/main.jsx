import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';  // Make sure you have global styles
import Home from './pages/Home';  // Home page
import Playlist from './pages/Playlist';  // Playlist page
import Album from './pages/Album';  // Album page

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="playlist/:id" element={<Playlist />} />
          <Route path="album/:id" element={<Album />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

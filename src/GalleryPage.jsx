import React, { useState } from 'react';
import GalleryForm from './GalleryForm';
import GalleryList from './GalleryList';
import './GalleryPage.css'; // Add custom styles for the GalleryPage

const GalleryPage = () => {
  const [view, setView] = useState('form'); // Default to 'form' view

  return (
    <div className="gallery-page-container">
      <div className="gallery-navigation">
        <button onClick={() => setView('form')} className={view === 'form' ? 'active' : ''}>
          Create Gallery
        </button>
        <button onClick={() => setView('list')} className={view === 'list' ? 'active' : ''}>
          View Galleries
        </button>
      </div>

      <div className="gallery-content">
        {view === 'form' ? <GalleryForm /> : <GalleryList/>}
      </div>
    </div>
  );
};

export default GalleryPage;

import React, { useState, useEffect } from 'react';
import './GalleryList.css'; // Add some basic styles for the list

const GalleryList = () => {
  const [galleries, setGalleries] = useState([]); // Store galleries

  // Simulate data fetching (replace with actual API call if needed)
  useEffect(() => {
    const fetchGalleries = async () => {
      // This should be replaced by a real API call if you have one
      // For example: const response = await fetch('/api/galleries');
      const mockData = [
        {
          gallery_id: 1,
          name: 'Modern Art Gallery',
          location: 'New York',
          description: 'A gallery showcasing modern art pieces.',
          artwork_ids: '1,2,3,4',
          organiser_id: 101,
        },
        {
          gallery_id: 2,
          name: 'Classic Art Gallery',
          location: 'Paris',
          description: 'Classic art from the Renaissance and Baroque periods.',
          artwork_ids: '5,6,7,8',
          organiser_id: 102,
        },
      ];
      setGalleries(mockData);
    };

    fetchGalleries();
  }, []);

  return (
    <div className="gallery-list-container">
      <h2>Gallery List</h2>
      {galleries.length === 0 ? (
        <p>No galleries available</p>
      ) : (
        <ul>
          {galleries.map((gallery) => (
            <li key={gallery.gallery_id} className="gallery-item">
              <h3>{gallery.name}</h3>
              <p><strong>Location:</strong> {gallery.location}</p>
              <p><strong>Description:</strong> {gallery.description}</p>
              <p><strong>Artwork IDs:</strong> {gallery.artwork_ids}</p>
              <p><strong>Organiser ID:</strong> {gallery.organiser_id}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GalleryList;

import React, { useState } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';
import './EventPage.css'; // Add custom styles for EventPage

const EventPage = () => {
  const [view, setView] = useState('form'); // default to 'form' view

  return (
    <div className="event-page-container">
      <div className="event-navigation">
        <button onClick={() => setView('form')} className={view === 'form' ? 'active' : ''}>
          Create Event
        </button>
        <button onClick={() => setView('list')} className={view === 'list' ? 'active' : ''}>
          View Events
        </button>
      </div>

      <div className="event-content">
        {view === 'form' ? <EventForm /> : <EventList />}
      </div>
    </div>
  );
};

export default EventPage;

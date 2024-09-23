import React, { useState, useEffect } from 'react';

// Mock API for events (replace this with actual API call)
const fetchEvents = async () => {
  return [
    {
      id: 1,
      event_name: 'Art Exhibition',
      description: 'An exhibition showcasing local artists.',
      organiser_id: 101,
      event_start_date: '2024-10-15',
      event_end_date: '2024-10-20',
      location: 'City Art Gallery',
      registration_form_link: 'https://example.com/register1',
    },
    {
      id: 2,
      event_name: 'Painting Workshop',
      description: 'A weekend workshop for aspiring painters.',
      organiser_id: 102,
      event_start_date: '2024-11-05',
      event_end_date: '2024-11-07',
      location: 'Downtown Community Center',
      registration_form_link: 'https://example.com/register2',
    },
    // Add more mock events as needed
  ];
};

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const eventData = await fetchEvents(); // Replace with actual API call
      setEvents(eventData);
    };
    getEvents();
  }, []);

  return (
    <div className="event-list-container">
      <h1>Available Events</h1>
      {events.length === 0 ? (
        <p>No events available at the moment.</p>
      ) : (
        <div className="event-cards">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h2>{event.event_name}</h2>
              <p><strong>Description:</strong> {event.description}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Start Date:</strong> {event.event_start_date}</p>
              <p><strong>End Date:</strong> {event.event_end_date}</p>
              <a href={event.registration_form_link} target="_blank" rel="noopener noreferrer">
                Register Here
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;

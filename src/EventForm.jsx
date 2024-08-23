import React, { useState } from 'react';
import './EventForm.css';

const EventForm = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [eventType, setEventType] = useState('');
    const [maxParticipants, setMaxParticipants] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [eventImage, setEventImage] = useState(null);
    const [ticketPrice, setTicketPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <div className="event-form">
            <h2>Register New Event</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Event Name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Event Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    required
                >
                    <option value="">Select Event Type</option>
                    <option value="Exhibition">Exhibition</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Auction">Auction</option>
                    <option value="Meetup">Meetup</option>
                </select>
                <input
                    type="number"
                    placeholder="Max Participants"
                    value={maxParticipants}
                    onChange={(e) => setMaxParticipants(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Contact Email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setEventImage(e.target.files[0])}
                />
                <input
                    type="number"
                    placeholder="Ticket Price (optional)"
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                />
                <button type="submit">Submit Event</button>
            </form>
        </div>
    );
};

export default EventForm;

import logo from './logo.svg';
import './App.css';
import './Login.css'
import './Register.css'
import './Home.css'
import './GalleryForm.css'
import './BiddingForm.css'
import './CartForm.css'
import './ProfileForm.css'
import './NewArtistForm.css'
import './EventForm.css'
import Login from './Login'
import Register from './Register';
import Home from './Home';
import GalleryForm from './GalleryForm'
import BiddingForm from './BiddingForm'
import CartPage from './CartPage'
import ProfileForm from './ProfileForm'
import NewArtistForm from './NewArtistForm'
import EventForm from './EventForm'
import SignIn from './SignIn'
import EventPage from './EventPage';
import React from 'react';

import SignUp from './SignUp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryPage from './GalleryPage';
// Import other components as needed

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<GalleryPage />} />
                {/* Add routes for other forms here */}
                <Route path="/bidding" element={<BiddingForm />} />
                <Route path="/events" element={<EventPage />} />
                <Route path="/cart" element={<CartPage/>} />
                <Route path="/profile" element={<ProfileForm />} />
                <Route path="/new-artist" element={<NewArtistForm />} />
                <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );
};

export default App;


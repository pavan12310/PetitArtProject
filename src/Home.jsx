import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <div className="logo">
                    <img src="/images/logo2.jpg" alt="Art Marketplace Logo" className="logo-image" />
                    <h1>Petit Art</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/bidding">Bidding</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/new-artist">New Artist</Link></li>
                    </ul>
                </nav>
                <div className="auth-buttons">
                    <Link to="/signin" className="auth-button">Sign In</Link>
                    <Link to="/signup" className="auth-button">Sign Up</Link>
                </div>
            </header>
            <main className="main-content">
                <div className="welcome-text">
                    <h1 className="head">Welcome to the Petit Art</h1>
                </div>
                <div className="options-grid">
                    <Link to="/gallery" className="option" id="gallery">
                        <h3>Gallery</h3>
                        <p>Explore amazing artworks from talented artists.</p>
                    </Link>
                    <Link to="/bidding" className="option" id="bidding">
                        <h3>Bidding</h3>
                        <p>Participate in art auctions and bid on your favorite pieces.</p>
                    </Link>
                    <Link to="/cart" className="option" id="cart">
                        <h3>Cart</h3>
                        <p>View and manage your selected art pieces before purchase.</p>
                    </Link>
                    <Link to="/profile" className="option" id="profile">
                        <h3>Profile</h3>
                        <p>Manage your account and view your purchases.</p>
                    </Link>
                    <Link to="/events" className="option" id="events">
                        <h3>Events</h3>
                        <p>Stay updated on upcoming art events and exhibitions.</p>
                    </Link>
                    <Link to="/new-artist" className="option" id="new-artist">
                        <h3>New Artist</h3>
                        <p>Register and upload your art to start selling.</p>
                    </Link>
                </div>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Art Marketplace. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;

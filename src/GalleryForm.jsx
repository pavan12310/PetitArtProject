import React, { useState } from 'react';
import './GalleryForm.css';

const GalleryForm = () => {
    const [images, setImages] = useState([
        { src: 'images/art5.jpg', title: 'Art Piece 1', artist: 'Artist 1' },
        { src: 'images/art11.jpg', title: 'Art Piece 2', artist: 'Artist 2' },
        { src: 'images/art6.jpg', title: 'Art Piece 3', artist: 'Artist 3' },
        { src: 'images/art1.jpg', title: 'Art Piece 4', artist: 'Artist 4' },
        { src: 'images/art4.jpg', title: 'Art Piece 5', artist: 'Artist 5' },
        { src: 'images/art7.jpg', title: 'Art Piece 6', artist: 'Artist 6' },
        { src: 'images/art8.jpg', title: 'Art Piece 7', artist: 'Artist 7' },
        { src: 'images/art9.jpg', title: 'Art Piece 8', artist: 'Artist 8' },
        { src: 'images/art10.jpg', title: 'Art Piece 9', artist: 'Artist 9' },
    ]);
    const [cart, setCart] = useState([]);
    const [details, setDetails] = useState(null);

    const addToCart = (image) => {
        setCart([...cart, image]);
    };

    const viewDetails = (image) => {
        setDetails(image);
    };

    return (
        <div className="gallery-form">
            <header className="gallery-header">
                <h2>Art Gallery</h2>
            </header>
            <section className="gallery-content">
                {images.length > 0 ? (
                    images.map((image, index) => (
                        <div key={index} className="gallery-card">
                            <img src={image.src} alt={image.title} />
                            <div className="gallery-card-info">
                                <h3>{image.title}</h3>
                                <p>{image.artist}</p>
                                <button onClick={() => addToCart(image)}>Add to Cart</button>
                                <button onClick={() => viewDetails(image)}>Details</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No artworks available</p>
                )}
            </section>
            {details && (
                <div className="details-popup">
                    <h3>{details.title}</h3>
                    <p>Artist: {details.artist}</p>
                    <img src={details.src} alt={details.title} />
                    <button onClick={() => setDetails(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default GalleryForm;

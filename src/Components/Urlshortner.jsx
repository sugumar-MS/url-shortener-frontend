
// UrlShorten.jsx

import React, { useState } from 'react';

const ShortenUrlComponent = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [error, setError] = useState('');

    const handleShortenUrl = async () => {
        try {
            const response = await fetch('http://localhost:3000/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ originalUrl }),
            });

            const result = await response.json();
            if (response.ok) {
                setShortUrl(result.shortUrl);
                setError('');
            } else {
                setError(result.message || 'An error occurred');
            }
        } catch (err) {
            console.error('Error shortening URL:', err);
            setError('An error occurred');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
                placeholder="Enter URL to shorten"
            />
            <button onClick={handleShortenUrl}>Shorten URL</button>
            {shortUrl && <p>Short URL: {shortUrl}</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default ShortenUrlComponent;

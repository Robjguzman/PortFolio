import React, { useState, useEffect } from 'react';
import '../styles/Api.css';

function Api() {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
   

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const res = await fetch('https://portfolio-backend-jet-phi.vercel.app/api/messages');
            const data = await res.json();
        } catch (err) {
            console.error('Failed to fetch messages', err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null); // Clear previous errors

        try {
            await fetch(
                "https://portfolio-backend-jet-phi.vercel.app/api/messages",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ message, status }),
                }
            );

            fetchMessages(); // Refresh the messages after submission
            
            // Clear form inputs
            setMessage('');
            setStatus('');
        } catch (error) {
            console.error(error);
            setError('Error: Could not send message');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id="api">
            <div className="api-page">
                <div className="api-container">
                    <h1>API Testing</h1>
                    <p>Test the API by submitting a message and status.</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <input
                                type="text"
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="status">Status:</label>
                            <select
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="success">Success</option>
                                <option value="error">Error</option>
                            </select>
                        </div>
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                    {error && <p className="error">{error}</p>}
                </div>
                
            </div>
        </div>
    );
}

export default Api;

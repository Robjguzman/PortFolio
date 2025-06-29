import React, { useState } from "react";
import "../styles/Api.css";

function Api() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showMessagesModal, setShowMessagesModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("https://portfolio-backend-jet-phi.vercel.app/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, status }),
      });

      if (response.ok) {
        setSuccess(true);
        setMessage("");
        setStatus("");
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMessages = async () => {
    setLoadingMessages(true);
    try {
      const response = await fetch("https://portfolio-backend-jet-phi.vercel.app/api/messages");
      if (response.ok) {
        const data = await response.json();
        // Sort messages by created_at date, most recent first
        const sortedMessages = Array.isArray(data) 
          ? data.sort((a, b) => new Date(b.created_at || b.timestamp || 0) - new Date(a.created_at || a.timestamp || 0))
          : [];
        setMessages(sortedMessages);
        setShowMessagesModal(true);
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
      setError("Failed to fetch messages from database");
    } finally {
      setLoadingMessages(false);
    }
  };

  const closeModal = () => {
    setShowMessagesModal(false);
    setMessages([]);
  };

  return (
    <div id="api">
      <div className="api-page">
        <div className="api-container">
          {/* Header Section */}
          <div className="api-header">
            <h1>API Testing Dashboard</h1>
            <p>Test Robert&apos;s backend API endpoints with real-time validation and monitoring.</p>
            <p>After submitting your test message, view all stored messages in the database:</p>
            <button
              className="highlight-link"
              onClick={fetchMessages}
              disabled={loadingMessages}
            >
              {loadingMessages ? "Loading Messages..." : "View All Messages Database"}
            </button>
          </div>

          {/* Main Content */}
          <div className="api-content">
            {/* API Information Card */}
            <div className="api-info-card">
              <h2>API Endpoint</h2>
              <div className="endpoint-display">
                POST /api/messages
              </div>
              <div className="api-features">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-text">Real-time message processing</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-text">Instant validation & response</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔒</div>
                  <div className="feature-text">Secure data transmission</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <div className="feature-text">Persistent data storage</div>
                </div>
              </div>
            </div>

            {/* Test Form Card */}
            <div className="api-form-card">
              <h2>Test API Request</h2>
              <form onSubmit={handleSubmit} className="api-form">
                <div className="form-group">
                  <label htmlFor="message">Message Content</label>
                  <input
                    type="text"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your test message..."
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="status">Status Type</label>
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                  >
                    <option value="">Select status type...</option>
                    <option value="success">Success</option>
                    <option value="error">Error</option>
                    <option value="info">Info</option>
                    <option value="warning">Warning</option>
                  </select>
                </div>
                
                <button type="submit" disabled={isLoading} className="submit-btn">
                  {isLoading ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending Request...
                    </>
                  ) : (
                    "Send API Request"
                  )}
                </button>

                {/* Status Messages */}
                {success && (
                  <div className="status-message success">
                    ✅ Message sent successfully! Check the database to see your entry.
                  </div>
                )}
                
                {error && (
                  <div className="status-message error">
                    ❌ {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Messages Modal */}
        {showMessagesModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Database Messages</h2>
                <button className="close-btn" onClick={closeModal}>×</button>
              </div>
              <div className="modal-body">
                {messages.length === 0 ? (
                  <p className="no-messages">No messages found in the database.</p>
                ) : (
                  <div className="messages-list">
                    {messages.map((msg, index) => (
                      <div key={index} className="message-item">
                        <div className="message-header">
                          <span className={`status-badge ${msg.status}`}>
                            {msg.status?.toUpperCase() || 'UNKNOWN'}
                          </span>
                          <span className="message-date">
                            {msg.created_at ? new Date(msg.created_at).toLocaleString() : 
                             msg.timestamp ? new Date(msg.timestamp).toLocaleString() : 'Unknown date'}
                          </span>
                        </div>
                        <div className="message-content">
                          {msg.message || 'No message content'}
                        </div>
                        {msg.id && (
                          <div className="message-id">ID: {msg.id}</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Api;

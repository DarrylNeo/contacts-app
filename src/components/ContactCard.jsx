import React, { useState } from 'react';
import './ContactCard.css';

function ContactCard({ contact, index, searchTerm }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => 
      regex.test(part) ? <mark key={i} className="highlight">{part}</mark> : part
    );
  };

  const getAvatarColor = (name) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEmailClick = (e) => {
    e.stopPropagation();
    window.location.href = `mailto:${contact.email}`;
  };

  const handlePhoneClick = (e) => {
    e.stopPropagation();
    window.location.href = `tel:${contact.phone}`;
  };

  const handleWebsiteClick = (e) => {
    e.stopPropagation();
    window.open(`http://${contact.website}`, '_blank');
  };

  return (
    <div 
      className={`contact-card ${isExpanded ? 'expanded' : ''} ${isHovered ? 'hovered' : ''}`}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="contact-header">
        <div 
          className="contact-avatar"
          style={{ backgroundColor: getAvatarColor(contact.name) }}
        >
          <span className="avatar-text">
            {contact.name.charAt(0).toUpperCase()}
          </span>
          <div className="avatar-ring"></div>
        </div>
        <div className="contact-basic-info">
          <h3 className="contact-name">
            {highlightText(contact.name, searchTerm)}
          </h3>
          <p className="contact-username">@{contact.username}</p>
          <div className="contact-status">
            <div className="status-dot online"></div>
            <span>Online</span>
          </div>
        </div>
        <div className="card-actions">
          <button className="action-btn favorite">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <div className="expand-indicator">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="contact-details">
        <div className="contact-info-grid">
          <div className="contact-info-item clickable" onClick={handleEmailClick}>
            <div className="info-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="info-content">
              <span className="info-label">Email</span>
              <span className="info-value">
                {highlightText(contact.email, searchTerm)}
              </span>
            </div>
          </div>
          
          <div className="contact-info-item clickable" onClick={handlePhoneClick}>
            <div className="info-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="info-content">
              <span className="info-label">Phone</span>
              <span className="info-value">{contact.phone}</span>
            </div>
          </div>
          
          <div className="contact-info-item clickable" onClick={handleWebsiteClick}>
            <div className="info-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div className="info-content">
              <span className="info-label">Website</span>
              <span className="info-value">{contact.website}</span>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="info-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="info-content">
              <span className="info-label">Company</span>
              <span className="info-value">
                {highlightText(contact.company.name, searchTerm)}
              </span>
            </div>
          </div>
        </div>
        
        {isExpanded && (
          <div className="expanded-details">
            <div className="detail-section">
              <h4>Address</h4>
              <p>{contact.address.street}, {contact.address.suite}</p>
              <p>{contact.address.city}, {contact.address.zipcode}</p>
            </div>
            <div className="detail-section">
              <h4>Company Details</h4>
              <p><strong>Catchphrase:</strong> {contact.company.catchPhrase}</p>
              <p><strong>Business:</strong> {contact.company.bs}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactCard;

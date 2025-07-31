import React from 'react';
import ContactCard from './ContactCard';
import './ContactsList.css';

function ContactsList({ contacts, loading, error, searchTerm }) {
  if (loading) {
    return (
      <div className="contacts-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading your contacts...</div>
          <div className="loading-subtext">Please wait while we fetch your network</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="contacts-container">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <div className="error-text">Oops! Something went wrong</div>
          <div className="error-subtext">{error}</div>
          <button className="retry-button" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className="contacts-container">
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <div className="empty-text">No contacts found</div>
          <div className="empty-subtext">
            {searchTerm 
              ? `No results for "${searchTerm}". Try a different search term.`
              : "Your contact list is empty. Add some contacts to get started."
            }
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h2 className="contacts-title">
          {searchTerm ? `Search Results (${contacts.length})` : `All Contacts (${contacts.length})`}
        </h2>
        {searchTerm && (
          <div className="search-info">
            Showing results for "<span className="search-term">{searchTerm}</span>"
          </div>
        )}
      </div>
      
      <div className="contacts-list">
        {contacts.map((contact, index) => (
          <ContactCard 
            key={contact.id} 
            contact={contact} 
            index={index}
            searchTerm={searchTerm}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactsList;

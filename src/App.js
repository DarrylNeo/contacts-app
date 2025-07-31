import React, { useState, useEffect } from 'react';
import ContactsList from './components/ContactsList';
import SearchBar from './components/SearchBar';
import FilterTabs from './components/FilterTabs';
import StatsCard from './components/StatsCard';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch contacts.');
        }
        const data = await response.json();
        setContacts(data);
        setFilteredContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchContacts();
  }, []);

  useEffect(() => {
    let filtered = contacts;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone.includes(searchTerm)
      );
    }

    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(contact => {
        switch (activeFilter) {
          case 'business':
            return contact.company.name.length > 10;
          case 'personal':
            return contact.website.includes('.net') || contact.website.includes('.org');
          case 'recent':
            return contact.id <= 5;
          default:
            return true;
        }
      });
    }

    setFilteredContacts(filtered);
  }, [contacts, searchTerm, activeFilter]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="app-container">
      <div className="app-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">👥</span>
            Contact Hub
          </h1>
          <p className="app-subtitle">Discover and connect with your network</p>
        </div>
      </header>

      <main className="main-content">
        <div className="controls-section">
          <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
          <FilterTabs activeFilter={activeFilter} onFilterChange={handleFilterChange} />
        </div>

        <StatsCard 
          totalContacts={contacts.length}
          filteredCount={filteredContacts.length}
          loading={loading}
        />

        <ContactsList 
          contacts={filteredContacts}
          loading={loading}
          error={error}
          searchTerm={searchTerm}
        />
      </main>
    </div>
  );
}

export default App;

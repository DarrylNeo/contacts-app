import React from 'react';
import './FilterTabs.css';

function FilterTabs({ activeFilter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'All Contacts', icon: '👥', count: null },
    { id: 'recent', label: 'Recent', icon: '🕒', count: null },
    { id: 'business', label: 'Business', icon: '💼', count: null },
    { id: 'personal', label: 'Personal', icon: '👤', count: null }
  ];

  return (
    <div className="filter-tabs-container">
      <div className="filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
          >
            <span className="filter-icon">{filter.icon}</span>
            <span className="filter-label">{filter.label}</span>
            {filter.count && (
              <span className="filter-count">{filter.count}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterTabs;

import React from 'react';
import './StatsCard.css';

function StatsCard({ totalContacts, filteredCount, loading }) {
  if (loading) {
    return (
      <div className="stats-card loading">
        <div className="stats-skeleton">
          <div className="skeleton-bar"></div>
          <div className="skeleton-bar short"></div>
        </div>
      </div>
    );
  }

  const stats = [
    {
      label: 'Total Contacts',
      value: totalContacts,
      icon: '👥',
      color: 'blue'
    },
    {
      label: 'Showing',
      value: filteredCount,
      icon: '👁️',
      color: 'green'
    },
    {
      label: 'Companies',
      value: totalContacts, // Assuming each contact has a company
      icon: '🏢',
      color: 'purple'
    },
    {
      label: 'Active',
      value: totalContacts,
      icon: '✅',
      color: 'orange'
    }
  ];

  return (
    <div className="stats-card">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-item ${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
            <div className="stat-trend">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsCard;

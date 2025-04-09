import React, { useState } from 'react';
import OpportunityCard from '../components/OpportunityCard';

const Opportunities = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data - would normally come from API
  const opportunities = [
    {
      id: 1,
      title: 'Beach Cleanup',
      organization: 'Ocean Protectors',
      location: 'Santa Monica, CA',
      date: '2023-11-15',
      category: 'environment',
      description: 'Help clean up local beaches and protect marine wildlife',
      hours: 4
    },
    {
      id: 2,
      title: 'Food Bank Volunteer',
      organization: 'Community Food Share',
      location: 'Denver, CO',
      date: '2023-11-20',
      category: 'hunger',
      description: 'Sort and package food donations for distribution',
      hours: 3
    }
  ];

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         opp.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeTab === 'all' || opp.category === activeTab;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Volunteer Opportunities</h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search opportunities..."
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {['all', 'environment', 'hunger', 'education', 'animals'].map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${activeTab === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpportunities.map(opportunity => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>
    </div>
  );
};

export default Opportunities;

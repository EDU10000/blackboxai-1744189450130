import React from 'react';
import { Link } from 'react-router-dom';

const OpportunityCard = ({ opportunity }) => {
  const categoryColors = {
    environment: 'bg-green-100 text-green-800',
    hunger: 'bg-red-100 text-red-800',
    education: 'bg-blue-100 text-blue-800',
    animals: 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-800">{opportunity.title}</h2>
          <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[opportunity.category] || 'bg-gray-100 text-gray-800'}`}>
            {opportunity.category}
          </span>
        </div>
        <p className="text-gray-600 mb-1">{opportunity.organization}</p>
        <p className="text-gray-500 text-sm mb-4">{opportunity.location} • {opportunity.date}</p>
        <p className="text-gray-700 mb-4">{opportunity.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">{opportunity.hours} hours</span>
          <Link 
            to={`/opportunities/${opportunity.id}`}
            className="bg-primary hover:bg-primary-dark text-white text-sm font-medium py-2 px-4 rounded transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpportunityCard;

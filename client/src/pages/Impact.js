import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Impact = () => {
  // Sample data - would normally come from API
  const impactData = {
    totalHours: 42,
    causes: [
      { name: 'Environment', hours: 18 },
      { name: 'Education', hours: 12 },
      { name: 'Hunger Relief', hours: 8 },
      { name: 'Animal Welfare', hours: 4 }
    ],
    badges: [
      { name: 'First Timer', earned: true },
      { name: 'Eco Warrior', earned: true },
      { name: 'Community Hero', earned: false },
      { name: '100 Hours', earned: false }
    ]
  };

  const chartData = {
    labels: impactData.causes.map(cause => cause.name),
    datasets: [
      {
        data: impactData.causes.map(cause => cause.hours),
        backgroundColor: [
          '#10B981',
          '#3B82F6',
          '#EF4444',
          '#8B5CF6'
        ],
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Impact</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Volunteer Hours</h2>
          <div className="flex items-center justify-center">
            <div className="w-48 h-48">
              <Doughnut 
                data={chartData} 
                options={{ 
                  plugins: { legend: { position: 'right' } },
                  cutout: '70%'
                }} 
              />
            </div>
          </div>
          <p className="text-center mt-4 text-gray-700">
            <span className="text-2xl font-bold text-primary">{impactData.totalHours}</span> total hours volunteered
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Badges Earned</h2>
          <div className="grid grid-cols-2 gap-4">
            {impactData.badges.map((badge, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg text-center ${badge.earned ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200 opacity-50'}`}
              >
                <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${badge.earned ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                  <i className={`fas fa-${badge.earned ? 'check' : 'lock'} text-lg`}></i>
                </div>
                <p className="text-sm font-medium">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-green-100 text-green-800 p-2 rounded-full mr-4">
              <i className="fas fa-leaf"></i>
            </div>
            <div>
              <p className="font-medium">Beach Cleanup - 4 hours</p>
              <p className="text-sm text-gray-500">October 15, 2023</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-4">
              <i className="fas fa-book"></i>
            </div>
            <div>
              <p className="font-medium">Tutoring Session - 3 hours</p>
              <p className="text-sm text-gray-500">October 10, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;

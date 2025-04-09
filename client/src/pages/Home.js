import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Make Your Impact</h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with causes you care about and find volunteer opportunities that match your skills
        </p>
        <Link 
          to="/opportunities" 
          className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Find Opportunities
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Discover</h2>
          <p className="text-gray-600">
            Browse hundreds of volunteer opportunities from trusted organizations
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Track</h2>
          <p className="text-gray-600">
            Log your volunteer hours and see the real impact you're making
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Connect</h2>
          <p className="text-gray-600">
            Join a community of like-minded volunteers and share your experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

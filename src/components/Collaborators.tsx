
import { useState, useEffect } from 'react';

interface CollaboratorsProps {
  collaborators: string[];
}

const Collaborators: React.FC<CollaboratorsProps> = ({ collaborators }) => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container-width section-padding">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Our Collaborators</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {collaborators.map((collaborator, index) => (
              <span 
                key={index}
                className="text-gray-600 font-medium px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {collaborator}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;


import { useState, useEffect } from 'react';

interface Collaborator {
  id: string;
  name: string;
  logo: string;
  website: string;
}
interface CollaboratorsProps {
  collaborators: Collaborator[];
}

const Collaborators: React.FC<CollaboratorsProps> = ({ collaborators }) => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container-width section-padding">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Our Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {collaborators.map(collab => (
              <a
                key={collab.id}
                href={collab.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-32 h-16"
              >
                <img
                  src={collab.logo}
                  alt={collab.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Collaborators;
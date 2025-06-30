import { useEffect, useState } from 'react';

interface RunningTextProps {
  companies: string[];
}

const RunningText: React.FC<RunningTextProps> = ({ companies }) => {
  return (
    <div className="bg-[#1872f2] py-4 overflow-hidden">
      <div className="relative">
        <div className="animate-marquee whitespace-nowrap flex">
          <div className="flex items-center space-x-8">
            {companies.concat(companies).map((company, index) => (
              <span 
                key={`${company}-${index}`}
                className="text-lg font-medium text-white mx-8"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default RunningText;

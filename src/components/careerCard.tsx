import React from 'react';
import { CareerCardProps } from '../types/careerCardProps';


const CareerCard: React.FC<CareerCardProps> = ({ companyName, roleName, startDate, endDate, description, skills }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-black">{companyName}</h2>
        <h3 className="text-xl text-gray-700">{roleName}</h3>
        <p className="text-gray-500">{startDate} - {endDate}</p>
        <p className="mt-6 text-gray-600">{description}</p>
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-black">Developed Skills:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;

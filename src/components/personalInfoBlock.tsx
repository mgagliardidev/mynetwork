import React from 'react';

interface PersonalInfoBlockProps {
  name: string;
  surname: string;
  mail: string;
  dob: string;
  nationality: string;
}

const PersonalInfoBlock: React.FC<PersonalInfoBlockProps> = ({ name, surname, mail, dob, nationality }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-md bg-white">
      <p className="text-lg mb-2"><strong className="font-semibold">Name:</strong> {name}</p>
      <p className="text-lg mb-2"><strong className="font-semibold">Surname:</strong> {surname}</p>
      <p className="text-lg mb-2"><strong className="font-semibold">Mail:</strong> {mail}</p>
      <p className="text-lg mb-2"><strong className="font-semibold">Date of Birth:</strong> {dob}</p>
      <p className="text-lg"><strong className="font-semibold">Nationality:</strong> {nationality}</p>
    </div>
  );
};

export default PersonalInfoBlock;

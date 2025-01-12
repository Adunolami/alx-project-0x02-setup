import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600 mt-2">Email: {email}</p>
      <p className="text-gray-600 mt-1">
        Address: {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
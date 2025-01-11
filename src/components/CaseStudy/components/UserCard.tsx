import React from 'react';
import { EndUser } from '../types/users';

interface UserCardProps {
  user: EndUser;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
        <img 
          src={user.image} 
          alt={user.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{user.title}</h3>
      <p className="text-gray-600">{user.ageGroup}</p>
    </div>
  );
}
import React from 'react';
import { Users as UsersIcon } from 'lucide-react';
import { END_USERS } from '../constants/users';
import { UserCard } from '../components';

export default function Users() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-16">
          <UsersIcon className="w-8 h-8 text-orange-500" />
          <h2 className="text-3xl font-bold">End Users</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {END_USERS.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      </div>
    </section>
  );
}
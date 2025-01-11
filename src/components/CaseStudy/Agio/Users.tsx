import React from 'react';
import { Users as UsersIcon } from 'lucide-react';

const userGroups = [
  {
    title: "ELDERS",
    ageGroup: "Age group: 60+",
    description: "Primary users seeking social connection and support",
    image: "/images/agio/end-user-elder.jpg"
  },
  {
    title: "CAREGIVERS",
    ageGroup: "Age group: 25-60",
    description: "Professional and family caregivers providing support",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "HEALTHCARE PROVIDERS",
    ageGroup: "Age group: 25-65",
    description: "Medical professionals and support staff",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "COMMUNITY MEMBERS",
    ageGroup: "Age group: 18+",
    description: "Volunteers and community support network",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=500"
  }
];

export default function Users() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <UsersIcon className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold">End Users</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {userGroups.map((user, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={user.image}
                  alt={user.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{user.title}</h3>
                <p className="text-purple-600 text-sm mb-3">{user.ageGroup}</p>
                <p className="text-gray-600">{user.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
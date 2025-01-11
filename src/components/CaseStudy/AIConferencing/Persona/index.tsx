import React from 'react';
import { UserCircle } from 'lucide-react';
import PersonalitySlider from './PersonalitySlider';
import NeedsList from './NeedsList';
import PainPoints from './PainPoints';

export default function Persona() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <UserCircle className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">PERSONA</h2>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Profile Section */}
            <div className="md:col-span-2">
              <div className="flex items-start gap-6 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
                  alt="Bharat Gehlot"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold">Bharat Gehlot</h3>
                  <p className="text-gray-600 mb-2">Product Delivery Manager</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Age: 39</p>
                    <p>Status: Married, 2 kids</p>
                    <p>Location: Jaipur, Rajasthan, India</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3">ABOUT</h4>
                <p className="text-gray-700 mb-4">
                  Bharat works for a medium-size Software services company as Product Delivery Manager.
                  He Handles multiple projects and most of the time-traveling for client meetings. He enjoys flexibility working remotely (He is used to it).
                </p>
                <p className="text-gray-700 mb-4">
                  Team members are different and from different time zone and find it hard to communicate.
                </p>
                <p className="text-gray-700">
                  He works hard to motivate the team. However, not able to obtain results as expected from the clients, which lead in slow work and Sometimes frustrating.
                  Bharat feels that time zone differences have a negative impact on productivity and efficiency.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">NEEDS</h4>
                  <NeedsList />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">PAIN POINTS</h4>
                  <PainPoints />
                </div>
              </div>
            </div>

            {/* Personality Section */}
            <div>
              <h4 className="text-lg font-semibold mb-6">PERSONALITY</h4>
              <PersonalitySlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';

const devices = [
  {
    icon: Monitor,
    percentage: 66,
    label: "Desktop/Laptop"
  },
  {
    icon: Smartphone,
    percentage: 31,
    label: "Smartphones"
  },
  {
    icon: Tablet,
    percentage: 13,
    label: "Tablets"
  }
];

export default function DeviceUsage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-8">Device Usage</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {devices.map((device, index) => {
          const Icon = device.icon;
          return (
            <div key={index} className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">{device.percentage}%</div>
                <div className="text-gray-600">{device.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
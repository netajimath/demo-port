import React from 'react';

interface ComparisonData {
  category: string;
  items: {
    feature: string;
    zoom: string | number;
    skype: string | number;
    gotoMeeting: string | number;
    msTeams: string | number;
  }[];
}

const data: ComparisonData[] = [
  {
    category: "Support",
    items: [
      { feature: "Phone support", zoom: "YES", skype: "YES", gotoMeeting: "YES", msTeams: "NO" },
      { feature: "Online support", zoom: "YES", skype: "YES", gotoMeeting: "YES", msTeams: "YES" },
      { feature: "Knowledge base", zoom: "YES", skype: "YES", gotoMeeting: "YES", msTeams: "YES" },
      { feature: "Video tutorials", zoom: "YES", skype: "NO", gotoMeeting: "YES", msTeams: "NO" }
    ]
  },
  {
    category: "Pricing",
    items: [
      { feature: "Monthly cost", zoom: "$13.99", skype: "$2", gotoMeeting: "$24", msTeams: "$5" },
      { feature: "Free trial available", zoom: "YES", skype: "NO", gotoMeeting: "YES", msTeams: "NO" },
      { feature: "Free account", zoom: "YES", skype: "YES", gotoMeeting: "NO", msTeams: "YES" },
      { feature: "Subscription based", zoom: "YES", skype: "YES", gotoMeeting: "YES", msTeams: "YES" }
    ]
  },
  {
    category: "Reviews And Ratings",
    items: [
      { feature: "Overall Rating", zoom: 4.6, skype: 4.3, gotoMeeting: 4.5, msTeams: 4.6 },
      { feature: "Features", zoom: 4.5, skype: 4.3, gotoMeeting: 4.4, msTeams: 4.5 },
      { feature: "Ease of Use", zoom: 4.6, skype: 4.4, gotoMeeting: 4.4, msTeams: 4.4 },
      { feature: "Value for Money", zoom: 4.5, skype: 4.3, gotoMeeting: 4.3, msTeams: 4.3 },
      { feature: "Customer support", zoom: 4.4, skype: 4.2, gotoMeeting: 4.3, msTeams: 4.2 }
    ]
  }
];

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left bg-gray-100"></th>
            <th className="p-4 text-left bg-gray-100">Zoom</th>
            <th className="p-4 text-left bg-gray-100">Skype</th>
            <th className="p-4 text-left bg-gray-100">GoToMeeting</th>
            <th className="p-4 text-left bg-gray-100">Microsoft Teams</th>
          </tr>
        </thead>
        <tbody>
          {data.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              <tr>
                <td colSpan={5} className="p-4 bg-gray-50 font-semibold">
                  {section.category}
                </td>
              </tr>
              {section.items.map((item, itemIndex) => (
                <tr key={itemIndex} className="border-t">
                  <td className="p-4">{item.feature}</td>
                  <td className="p-4">
                    <Value value={item.zoom} />
                  </td>
                  <td className="p-4">
                    <Value value={item.skype} />
                  </td>
                  <td className="p-4">
                    <Value value={item.gotoMeeting} />
                  </td>
                  <td className="p-4">
                    <Value value={item.msTeams} />
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Value({ value }: { value: string | number }) {
  if (typeof value === 'number') {
    return <span>{value.toFixed(1)}</span>;
  }
  
  if (value === 'YES' || value === 'NO') {
    return (
      <span className={`px-2 py-1 rounded text-sm ${
        value === 'YES' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {value}
      </span>
    );
  }

  return <span>{value}</span>;
}
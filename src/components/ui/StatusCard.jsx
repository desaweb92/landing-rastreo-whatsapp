import React from 'react';

const statusColors = {
  'en proceso': 'bg-blue-100 text-blue-800',
  'en tránsito': 'bg-purple-100 text-purple-800',
  'entregado': 'bg-green-100 text-green-800',
  'retrasado': 'bg-yellow-100 text-yellow-800',
  'problema': 'bg-red-100 text-red-800'
};

const StatusCard = ({ status, date, location, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 border-envia-red">
      <div className="flex justify-between items-start">
        <div>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[status.toLowerCase()] || 'bg-gray-100 text-gray-800'}`}>
            {status}
          </span>
          <h3 className="text-lg font-bold text-envia-gray mt-2">{description}</h3>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
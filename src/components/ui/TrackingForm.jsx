import React, { useState } from 'react';

const TrackingForm = ({ onTrack }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      setError('Por favor ingresa tu número de guía');
      return;
    }
    setError('');
    onTrack(trackingNumber);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-envia-gray mb-4">Rastrea tu envío</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="tracking" className="block text-envia-gray mb-2">
            Número de guía
          </label>
          <input
            type="text"
            id="tracking"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Ej: ENV123456789"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-envia-red"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-envia-red text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition duration-300"
        >
          Rastrear envío
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-4">
        ¿No tienes tu número de guía? <a href="#" className="text-envia-red hover:underline">Contáctanos</a>
      </p>
    </div>
  );
};

export default TrackingForm;
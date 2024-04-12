"use client";
import React, { useState } from 'react';

const CarbonFootprintForm = () => {
  const [formData, setFormData] = useState({
    transportationMode: '',
    transportationDistance: '',
    electricity: '',
    waste: '',
    water: '',
    food: '',
  });

  const [backgroundColor, setBackgroundColor] = useState({
    r: 255,
    g: 255,
    b: 255,
    transition: '0.5s ease-in-out',
  });

  const handleInputChange = (e:any) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    // Calculate the total of the form fields
    const total =
      (formData.transportationMode ? Number(formData.transportationDistance) : 0) +
      Number(formData.electricity.split(' ')[0]) +
      Number(formData.waste.split(' ')[0]) +
      Number(formData.water.split(' ')[0]) +
      Number(formData.food.split(' ')[0]);

    // Calculate the darkness of the background color
    const darkness = Math.floor((total / 250) * 255);
    setBackgroundColor({
      r: 255 - darkness,
      g: 255 - darkness,
      b: 255 - darkness,
      transition: '0.5s ease-in-out',
    });
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundColor: `rgb(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b})`,
        transition: backgroundColor.transition,
      }}
    >
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md animate-fade-in">
        <div className="mb-4 animate-slide-up flex items-center">
          <label
            className="block text-gray-700 font-bold mr-2"
            htmlFor="transportationMode"
          >
            Transportation Mode:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="transportationMode"
            value={formData.transportationMode}
            onChange={handleInputChange}
          >
            <option value="">Select transportation mode</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="public_transit">Public Transit</option>
            <option value="other">Other</option>
          </select>
        </div>
        {formData.transportationMode && (
          <div className="mb-4 animate-slide-up flex items-center">
            <label
              className="block text-gray-700 font-bold mr-2"
              htmlFor="transportationDistance"
            >
              Distance Traveled (km):
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="transportationDistance"
              type="text"
              placeholder="Enter distance traveled"
              value={formData.transportationDistance}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="mb-4 animate-slide-up flex items-center">
          <label
            className="block text-gray-700 font-bold mr-2"
            htmlFor="electricity"
          >
            Electricity:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="electricity"
            type="text"
            placeholder="Enter your electricity usage"
            value={formData.electricity}
            onChange={handleInputChange}
          />
          <span className="ml-2">kWh</span>
        </div>
        <div className="mb-4 animate-slide-up flex items-center">
          <label
            className="block text-gray-700 font-bold mr-2"
            htmlFor="waste"
          >
            Waste:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="waste"
            type="text"
            placeholder="Enter your waste habits"
            value={formData.waste}
            onChange={handleInputChange}
          />
          <span className="ml-2">kg</span>
        </div>
        <div className="mb-4 animate-slide-up flex items-center">
          <label
            className="block text-gray-700 font-bold mr-2"
            htmlFor="water"
          >
            Water:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="water"
            type="text"
            placeholder="Enter your water usage"
            value={formData.water}
            onChange={handleInputChange}
          />
          <span className="ml-2">L</span>
        </div>
        <div className="mb-4 animate-slide-up flex items-center">
          <label
            className="block text-gray-700 font-bold mr-2"
            htmlFor="food"
          >
            Food:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="food"
            type="text"
            placeholder="Enter your food habits"
            value={formData.food}
            onChange={handleInputChange}
          />
          <span className="ml-2">kg</span>
        </div>
        <div className="flex items-center justify-between animate-fade-in">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarbonFootprintForm;
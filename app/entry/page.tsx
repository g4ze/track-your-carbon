"use client"
import React, { useState } from 'react';

const CarbonFootprintForm = () => {
  const [formData, setFormData] = useState({
    transportation: '',
    electricity: '',
    waste: '',
    water: '',
    food: '',
  });

  const [backgroundColor, setBackgroundColor] = useState({ r: 241,
    g: 245,
    b: 249,
    transition: '0.5s ease-in-out',});

  const handleInputChange = (e:any) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    // Calculate the total of the form fields
    const total =
      Number(formData.transportation) +
      Number(formData.electricity) +
      Number(formData.waste) +
      Number(formData.water) +
      Number(formData.food);

    // Update the background color based on the total
    const darkness = Math.floor((total / 250) * 255);
    setBackgroundColor({
      r: 255-darkness,
      g: 255-darkness,
      b: 255-darkness,
      transition: '0.5s ease-in-out',
    });
  };

  return (
    <div
      className={`flex justify-center items-center h-screen `}
      style={{
        backgroundColor: `rgb(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b})`,
        transition: backgroundColor.transition,
      }}
    >
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md animate-fade-in">
        <div className="mb-4 animate-slide-up">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="transportation"
          >
            Transportation
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="transportation"
            type="text"
            placeholder="Enter your transportation habits"
            value={formData.transportation}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4 animate-slide-up">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="electricity"
          >
            Electricity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="electricity"
            type="text"
            placeholder="Enter your electricity usage"
            value={formData.electricity}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4 animate-slide-up">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="waste">
            Waste
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="waste"
            type="text"
            placeholder="Enter your waste habits"
            value={formData.waste}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4 animate-slide-up">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="water">
            Water
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="water"
            type="text"
            placeholder="Enter your water usage"
            value={formData.water}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4 animate-slide-up">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="food">
            Food
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="food"
            type="text"
            placeholder="Enter your food habits"
            value={formData.food}
            onChange={handleInputChange}
          />
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
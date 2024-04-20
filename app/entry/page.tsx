"use client";
import Formfield from '@/components/Formfield';
import LandingPage from '@/components/LandingPage';
import Loading from '@/components/Loading';
import { automateCarbonCalculation } from '@/lib/calc';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function() {
  const [formData, setFormData] = useState({
    transportationMode: 'Car',
    transportationDistance: '',
    electricity: '',
    waste: '',
    water: '',
    food: '',
    hoursoftravel: '',
    naturalGasUsage: '',
    recycling: '',
  });

  const session: any = useSession();
  const router = useRouter();

  if (session.status == "unauthenticated") {
    router.push("/");
  }

  return (
    <>
      {session.status == "loading" && (
        <div className="flex items-center justify-center h-screen">
          <Loading />
        </div>
      )}
      {session.status == "authenticated" && (
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              Carbon Footprint Calculator
            </h1>
            <p className="text-gray-600 mt-2">
              Calculate your carbon footprint based on your daily activities.
            </p>
            <div className="flex justify-center items-center mt-8">
              <div className="w-1/2 bg-pink-500 p-4 rounded-lg shadow-lg ">
                <Formfield
                  labelName="kcal Food"
                  placeholder="2000"
                  id="food"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Formfield
                  labelName="Water(L)"
                  placeholder="2000"
                  id="water"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Formfield
                  labelName="Electricity (kWh)"
                  placeholder="100"
                  id="electricity"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Formfield
                  labelName="Waste (kg)"
                  placeholder="10"
                  id="waste"
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
              <div className="w-1/2 bg-yellow-500 p-4 rounded-lg shadow-lg animate-slide-in-right">
                <Formfield
                  labelName="Transportation Mode"
                  placeholder="car"
                  id="transportationMode"
                  formData={formData}
                  setFormData={setFormData}
                  options={[
                    { value: 'car', label: 'Car', id: 1 },
                    { value: 'bike', label: 'Bike', id: 2 },
                  ]}
                />
                <Formfield
                  labelName="Hours of travel"
                  placeholder="2"
                  id="hoursoftravel"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Formfield
                  labelName="Natural Gas Usage (m³)"
                  placeholder="50"
                  id="naturalGasUsage"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Formfield
                  labelName="Recycling (kg)"
                  placeholder="5"
                  id="recycling"
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
            </div>
          </div>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

// export default function()  {
//   const [formData, setFormData] = useState({
//     transportationMode: '',
//     transportationDistance: '',
//     electricity: '',
//     waste: '',
//     water: '',
//     food: '',
//   });

//   const [backgroundColor, setBackgroundColor] = useState({
//     r: 255,
//     g: 255,
//     b: 255,
//     transition: '0.5s ease-in-out',
//   });

//   const handleInputChange = (e:any) => {
//     const { id, value } = e.target;
//     setFormData({
//       ...formData,
//       [id]: value,
//     });

//     // Calculate the total of the form fields
//     const total =
//       (formData.transportationMode ? Number(formData.transportationDistance) : 0) +
//       Number(formData.electricity.split(' ')[0]) +
//       Number(formData.waste.split(' ')[0]) +
//       Number(formData.water.split(' ')[0]) +
//       Number(formData.food.split(' ')[0]);

//     // Calculate the darkness of the background color
//     const darkness = Math.floor((total / 250) * 255);
//     setBackgroundColor({
//       r: 255 - darkness,
//       g: 255 - darkness,
//       b: 255 - darkness,
//       transition: '0.5s ease-in-out',
//     });
//   };

//   return (
//     <div
//       className="flex justify-center items-center h-screen"
//       style={{
//         backgroundColor: `rgb(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b})`,
//         transition: backgroundColor.transition,
//       }}
//     >
//       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md animate-fade-in">
//         <div className="mb-4 animate-slide-up flex items-center">
//           <label
//             className="block text-gray-700 font-bold mr-2"
//             htmlFor="transportationMode"
//           >
//             Transportation Mode:
//           </label>
//           <select
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="transportationMode"
//             value={formData.transportationMode}
//             onChange={handleInputChange}
//           >
//             <option value="">Select transportation mode</option>
//             <option value="car">Car</option>
//             <option value="bike">Bike</option>
//             <option value="public_transit">Public Transit</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         {formData.transportationMode && (
//           <div className="mb-4 animate-slide-up flex items-center">
//             <label
//               className="block text-gray-700 font-bold mr-2"
//               htmlFor="transportationDistance"
//             >
//               Distance Traveled (km):
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="transportationDistance"
//               type="text"
//               placeholder="Enter distance traveled"
//               value={formData.transportationDistance}
//               onChange={handleInputChange}
//             />
//           </div>
//         )}
//         <div className="mb-4 animate-slide-up flex items-center">
//           <label
//             className="block text-gray-700 font-bold mr-2"
//             htmlFor="electricity"
//           >
//             Electricity:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="electricity"
//             type="text"
//             placeholder="Enter your electricity usage"
//             value={formData.electricity}
//             onChange={handleInputChange}
//           />
//           <span className="ml-2">kWh</span>
//         </div>
//         <div className="mb-4 animate-slide-up flex items-center">
//           <label
//             className="block text-gray-700 font-bold mr-2"
//             htmlFor="waste"
//           >
//             Waste:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="waste"
//             type="text"
//             placeholder="Enter your waste habits"
//             value={formData.waste}
//             onChange={handleInputChange}
//           />
//           <span className="ml-2">kg</span>
//         </div>
//         <div className="mb-4 animate-slide-up flex items-center">
//           <label
//             className="block text-gray-700 font-bold mr-2"
//             htmlFor="water"
//           >
//             Water:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="water"
//             type="text"
//             placeholder="Enter your water usage"
//             value={formData.water}
//             onChange={handleInputChange}
//           />
//           <span className="ml-2">L</span>
//         </div>
//         <div className="mb-4 animate-slide-up flex items-center">
//           <label
//             className="block text-gray-700 font-bold mr-2"
//             htmlFor="food"
//           >
//             Food:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="food"
//             type="text"
//             placeholder="Enter your food habits"
//             value={formData.food}
//             onChange={handleInputChange}
//           />
//           <span className="ml-2">kg</span>
//         </div>
//         <div className="flex items-center justify-between animate-fade-in">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="button"
//           >
//             Calculate
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

"use client";
import Formfield from '@/components/Formfield';
import LandingPage from '@/components/LandingPage';
import Loading from '@/components/Loading';
import { automateCarbonCalculation } from '@/lib/calc';
import { empty } from '@prisma/client/runtime/library';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Input } from 'reactstrap';
import React, { useState } from 'react';

export default function CarbonFootprintCalculator() {
  const router = useRouter();
  const session:any = useSession();
  

  const [formData, setFormData] = useState({
    gender: '-',
    age: '',
    profession: '',
    weight: '',
    vehicle: [],
    ethnicity:''
  });
  const userdeets = getDeets();
 
  const[sentStatus,setSentStatus]=useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [vehicle1, setVehicle1] = useState('');

  async function getDeets(){
    const res = await fetch(`/api/getuserdetail?email=${session.data.user.email}`);
      const data = await res.json();
      return data.userdeets;
  }



function handleClick() {
  if (Object.keys(formData).length === 0) {
    // Form data is empty
    console.log("Form data is empty");
    return;
  }

  // Validate form data
  if (formData.gender === '-' || formData.age === '' || formData.profession === '' || formData.weight === '' ) {
    console.log("Form data is not valid");
    alert("Please fill all the fields");
    return;
  }

  // Continue with the rest of the code

  fetch('/api/putuserdetail', {
    method: 'PUT',
    body:JSON.stringify( {
      email: session.data.user.email,
      toput: formData
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      setSentStatus(true);
      alert(data.message);
      setTimeout(() => {
        // Code to execute after 10 seconds
      }, 10000);
      setSentStatus(false);
    })
    .catch(error => {
      // Handle the error
      alert(error);
    });
}

  if (session.status === "unauthenticated") {
    router.push("/");
  }

  return (
    <>
      {session.status === "loading" && (
        <div className="flex items-center justify-center h-screen">
          <Loading />
        </div>
      )}
      {session.status === "authenticated" && (
        <div className="flex justify-center items-center">
          <div className="text-center">
            <p className="text-gray-600 mt-2">
              Fetch your carbon footprint!
            </p>
            <div className="flex justify-center items-center mt-8">
              <div className="p-4 rounded-lg shadow-lg animate-slide-in-right">
                <Formfield
                  labelName="Gender"
                  placeholder=""
                  id="gender"
                  formData={formData}
                  setFormData={setFormData}
                  options={[
                    { value: '-', label: 'Select' ,id: 0},
                    { value: 'male', label: 'Male', id: 1 },
                    { value: 'female', label: 'Female', id: 2 },
                  ]}
                />
                <Formfield
                  labelName="Age"
                  placeholder="18"
                  id="age"
                  formData={formData}
                  setFormData={setFormData}
                />
                <Formfield
                  labelName="Ethnicity"
                  placeholder="Select"
                  id="ethnicity"
                  formData={formData}
                  setFormData={setFormData}
                  options={
                    [
                      { value: '-', label: 'Select', id: 0},
                      { value: 'indian', label: 'Indian', id: 1 },
                      { value: 'chinese', label: 'Chinese', id: 2 },
                      { value: 'american', label: 'American', id: 3 },
                      { value: 'british', label: 'British', id: 4 },
                      { value: 'german', label: 'German', id: 5 },
                      { value: 'french', label: 'French', id: 6 },
                      { value: 'italian', label: 'Italian', id: 7 },
                      { value: 'spanish', label: 'Spanish', id: 8 },
                      { value: 'japanese', label: 'Japanese', id: 9 },
                      { value: 'korean', label: 'Korean', id: 10 },
                      { value: 'russian', label: 'Russian', id: 11 },
                      { value: 'australian', label: 'Australian', id: 12 },
                      { value: 'canadian', label: 'Canadian', id: 13 },
                      { value: 'brazilian', label: 'Brazilian', id: 14 },
                      { value: 'mexican', label: 'Mexican', id: 15 },
                      { value: 'argentinian', label: 'Argentinian', id: 16 },
                      { value: 'dutch', label: 'Dutch', id: 17 },
                      { value: 'swedish', label: 'Swedish', id: 18 },
                      { value: 'norwegian', label: 'Norwegian', id: 19 },
                      { value: 'danish', label: 'Danish', id: 20 },
                    ]
                  }
                />
                <Formfield
                  labelName="Profession"
                  placeholder="Select"
                  id="profession"
                  formData={formData}
                  setFormData={setFormData}
                  options={[
                    { value: '-', label: 'Select', id: 0},
                    { value: 'student', label: 'Student', id: 1 },
                    { value: 'teacher', label: 'Teacher', id: 2 },
                    { value: 'doctor', label: 'Doctor', id: 3 },
                    { value: 'engineer', label: 'Engineer', id: 4 },
                    { value: 'lawyer', label: 'Lawyer', id: 5 },
                    { value: 'accountant', label: 'Accountant', id: 6 },
                    { value: 'farmer', label: 'Farmer', id: 7 },
                    { value: 'businessman', label: 'Businessman', id: 8 },
                    { value: 'politician', label: 'Politician', id: 9 },
                    { value: 'artist', label: 'Artist', id: 10 },
                    { value: 'writer', label: 'Writer', id: 11 },
                    { value: 'actor', label: 'Actor', id: 12 },
                    { value: 'singer', label: 'Singer', id: 13 },
                    { value: 'dancer', label: 'Dancer', id: 14 },
                    { value: 'chef', label: 'Chef', id: 15 },
                    { value: 'pilot', label: 'Pilot', id: 16 },
                    { value: 'soldier', label: 'Soldier', id: 17 },
                    { value: 'police', label: 'Police', id: 18 },
                    { value: 'firefighter', label: 'Firefighter', id: 19 },
                    { value: 'nurse', label: 'Nurse', id: 20 },
                    { value: 'scientist', label: 'Scientist', id: 21 },
                    { value: 'researcher', label: 'Researcher', id: 22 },
                    { value: 'professor', label: 'Professor', id: 23 },
                    { value: 'architect', label: 'Architect', id: 24 },
                    { value: 'designer', label: 'Designer', id: 25 },
                    { value: 'developer', label: 'Developer', id: 26 },
                    { value: 'police', label: 'Police', id: 27 },
                    { value: 'firefighter', label: 'Firefighter', id: 28 },
                    { value: 'nurse', label: 'Nurse', id: 29 },
                    { value: 'scientist', label: 'Scientist', id: 30 },
                    { value: 'researcher', label: 'Researcher', id: 31 },
                    { value: 'professor', label: 'Professor', id: 32 },
                    { value: 'architect', label: 'Architect', id: 33 },
                    { value: 'designer', label: 'Designer', id: 34 },
                  ]}
                />
                <Formfield
                  labelName="Weight"
                  placeholder="10kg"
                  id="weight"
                  formData={formData}
                  setFormData={setFormData}
                  
                />
                <div className='flex justify-center items-center'>
                <label className='m-2 text-right w-1/2 animate-slide-up'>
                  Vehicle
                </label>
                <Input 
                 type="select"
                  name="vehicle"
                  id="vehicle"
                  placeholder="Add your vehicle"
                  onChange={(e) => setVehicle1( e.target.value)}
                  className="appearance-none m-1 w-2/6 text-left border border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline animate-slide-up"
                  style={{ border: 'none' }}
                  >
                    <option value="Select">Select</option>
                    <option value="Bike">Bike</option>
                    <option value="Car">Car</option>
                    <option value="Bus">Bus</option>
                    <option value='Pvt jet'>Pvt jet</option>

                    </Input>
                <button
                  className="text-blue-400 font-bold py-2 px-4 w-1/6"
                  onClick={()=>{
                    setFormData({...formData, vehicle:[...formData.vehicle, vehicle1]});
                  }}
                >
                  +
                </button>
                </div>
                <div>
                  <h2 className="text-xl mt-6">Your Vehicles:</h2>
                  <ul>
                    {formData.vehicle.map((vehicle, index) => (
                      <li key={index}>{vehicle}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <button
              className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClick}
            >{sentStatus?"Saved":"Save"}
            </button>
          </div>
        </div>
      )}
    </>
  );

}


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req: Request) {
    const body=await req.json();
    const email = body.email;
    const toput=body.toput;
    const user = await prisma.userdata.upsert({
        where: { email },
        update: {
            gender:toput.gender,
            age:toput.age,
            weight:toput.weight,
            profession:toput.profession,
            vehicles:toput.vehicle,
        },
        create: {
            email: email,
            gender: toput.gender,
            age: toput.age,
            weight: toput.weight,
            profession: toput.profession,
            vehicles: toput.vehicle,
            ethnicity: toput.ethnicity,
            user: toput.user,
        }
    });
    console.log("User Upadted at /api/putuserdetail");
    await prisma.user.update({
        where: { email },
        data: {
            emission: calculateCO2eEmission(toput),
        },
    })
    if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), {
            status: 404,
        });
    }


  return new Response(JSON.stringify({message:"User updated"}));
}

function calculateCO2eEmission(formData:any) {
    const { gender, age, ethnicity, profession, weight, vehicle } = formData;

    // Provide type annotations for emissionFactors object
    const emissionFactors: {
      genderFactor: { [key: string]: number },
      ageFactor: { [key: string]: number },
      weightFactor: number,
      professionFactor: { [key: string]: number },
      ethnicityFactor: { [key: string]: number },
      vehicleFactor: { [key: string]: number }
    } = require("./emissionFactors.json");

    // Calculate emission factors based on provided parameters
    const genderFactor = emissionFactors.genderFactor[gender.toLowerCase()] || 1.0;
    const ageFactor = emissionFactors.ageFactor[age] || 1.0;
    const weightFactor = emissionFactors.weightFactor * weight;
    const professionFactor = emissionFactors.professionFactor[profession.toLowerCase()] || 1.0;
    const ethnicityFactor = emissionFactors.ethnicityFactor[ethnicity.toLowerCase()] || 1.0;
    const vehicleEmission = vehicle.reduce((total, vehicleType) => {
      const vehicleFactor = emissionFactors.vehicleFactor[vehicleType.toLowerCase()] || 0;
      return total + vehicleFactor;
    }, 0);
  
    // Calculate the total emission
    var totalEmission =
      (genderFactor +
        ageFactor +
        weightFactor +
        professionFactor +
        ethnicityFactor +
        vehicleEmission) *
      2.5; // Assuming a base emission of 2.5 tons CO2e per person per year
    totalEmission = (totalEmission/15)*5
    return totalEmission;
  }
  


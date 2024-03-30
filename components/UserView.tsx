// this is the component that renders on the authenticated user's page

import { PrismaClient } from "@prisma/client";
import Feet from "../public/feet.png";
import Button from "./Button";
import { useRouter } from "next/navigation";
const client = new PrismaClient();
export default(session:any):React.ReactNode=>{
    const router = useRouter();

    const first_name=session.session.data.user.name.split(" ")[0];
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white-200 p-4 rounded-lg flex ">
                <div className="text-left w-1/2">
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
                        HI! {first_name},<br></br>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
                            20299
                        </span> 
                        
                    </h1>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-2xl">
                            CO2eq/kg</span>
                    
                    <p className="text-lg font-normal text-gray-500 lg:text-xl ">
                        Till date footprint
                    </p>
                    
                </div>
                
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <Button label="Entry" func={():void=>{
                        
                        console.log("Entry");
                        router.push("/entry");
                    }} classN="rounded-none bg-green-500 w-40 h-10 text-white font-bold "/>
                    <img src={Feet.src} className="h-40" alt="leaf-logo" />
                    
                </div>
                
            </div>
        </div>
    );
}


async function getUserDetails({email}:{email:string}) {
  try {
    const user = await client.user.findFirst({
        where:{
            email: email,
        }
    });
    console.log(user);
    return {
    // name: user?.name,
    email: user?.email
    }
  }  catch(e) {
    console.log(e);
  }
}

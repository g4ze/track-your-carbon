// this is the component that renders on the authenticated user's page

import { PrismaClient } from "@prisma/client";
import Feet from "../public/feet.png";
import Button from "./Button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default (session:any): React.ReactNode => {
    const email = session.session.data.user.email;
    const [userData, setUserData] = useState({emission: null});
  const router = useRouter();

  useEffect(() => {
    async function fetchUserData() {
      const res = await fetch(`/api/getuserdetail?email=${email}`);
      const data = await res.json();
    
      setUserData(data);
    }
    fetchUserData();
  }, [email]);

    
    const first_name=session.session.data.user.name.split(" ")[0];
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white-200 p-4 rounded-lg flex ">
                <div className="text-left w-1/2">
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
                        HI! {first_name},<br></br>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
                            {userData?.emission ? userData.emission : ''}
                        </span> 
                    </h1>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-2xl">
                            Tons CO2eq</span>
                    
                    <p className="text-lg font-normal text-gray-500 lg:text-xl ">
                        this year
                    </p>
                    
                </div>
                
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <Button label="Entry" func={():void=>{
                        
                        console.log("Entry");
                        router.push("/entry");
                    }} classN="rounded-none bg-green-500 w-40 h-10 text-white font-bold "/>
                    <img src={Feet.src} className="h-40" alt="leaf-logo" />
                    <div>
                    <Button label="Nums" func={():void=>{
                        router.push("/live");
                    }} classN="rounded-none bg-yellow-500 w-20 h-10 text-white font-bold shadow-lg"/>
                    <Button label="Graphs" func={():void=>{
                        
                        console.log("graphs");
                        router.push("/graphs");
                    }} classN="rounded-none bg-red-500 w-20 h-10 text-white font-bold shadow-lg"
                    />
                    </div>
                </div>

                
            </div>
        </div>
    );
}


"use client"
import { useSession } from "next-auth/react";
import Loading from "./Loading";
import LandingPage from "./LandingPage";

export default () => {
    const session:any = useSession();
    return (
        <div>
        {session.status == "loading" &&
         <div className="flex items-center justify-center h-screen">
         <Loading/>
         </div>
        }{session.status == "unauthenticated" &&
            <LandingPage/>
        }
        </div>
    );
};
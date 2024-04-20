"use client"
import { useSession } from "next-auth/react";
import Loading from "./Loading";
import BottomBanner from "./BottomBanner";

import LandingPage from "./LandingPage";
import UserView from "./UserView";
import CarbonEmbed from "./CarbonEmbed";

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
        {
            session.status == "authenticated" &&
            <><section id="top">
                <CarbonEmbed/>
            <UserView session={session}/>
            </section>
            <section id="landing">
            <LandingPage/>
            <BottomBanner />
            </section>
            </>
        }
        </div>
    );
};
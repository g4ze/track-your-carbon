import { useEffect } from "react";
import CarbonEmbed from "./CarbonEmbed";
import Features from "./Features";
import "aos/dist/aos.css";
export default function LandingPage() {
  
    return (
        <>
            <div className="my-3 mx-auto md:px-2 p-8 rounded-lg animate-fade-in" style={{ animationDuration: '2s' }}>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
                    Empowering change,<br></br>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
                        One foot print at a time.
                    </span>
                </h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl ">
                    The Earth, our shared home, faces a pressing challenge: climate change. It&apos;s a daunting issue, but here&apos;s the good news: we all have the power to make a difference. Every action, big or small, contributes to the collective impact on our environment.
                </p>
            </div>
            <div className="mt-4 flex justify-center items-center  rounded-lg animate-fade-in" style={{ animationDuration: '10s' }}>
                <iframe
                    title='Tons of CO2 emitted into the atmosphere'
                    src='https://www.theworldcounts.com/embeds/counters/23?&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20'
                    className="w-1/2  overflow-hidden"
                ></iframe>
            </div>
            <div className="hidden md:block"><Features /></div>
        </>
    );
}
"use client"
import { useState } from "react";

export default function Page() {
    const [carbonelements, setCarbonelements] = useState(4);
    const handleScroll = () => {
        // Get the scroll position of the window
        const scrollPosition = window.scrollY || window.pageYOffset;
  
        // Get the height of the document
        const documentHeight = document.documentElement.scrollHeight;
  
        // Get the height of the viewport
        const viewportHeight = window.innerHeight;
  
        // Calculate how far down the user has scrolled
        const scrollDistance = documentHeight - viewportHeight - scrollPosition;
  
        // Define a threshold value for triggering the function (adjust as needed)
        const threshold = 100;
  
        // Check if the scroll distance is less than the threshold
        if (scrollDistance < threshold) {
          // Call your function here when the user scrolls down
          // Replace the function call below with your desired function
          handleScrollDown();
        }
      };
  
      const handleScrollDown = () => {
        console.log("Scrolled down!");
        // You can trigger any function or perform any action here
        setCarbonelements(carbonelements + 2);
      };
  
      // Add the scroll event listener
      window.addEventListener("scroll", handleScroll);
  




    const iframeLinks = [
        "https://ourworldindata.org/grapher/annual-co-emissions-by-region?tab=chart",
        "https://ourworldindata.org/grapher/annual-co2-including-land-use?tab=map",
        "https://ourworldindata.org/grapher/ghg-emissions-by-world-region?tab=chart",
        "https://ourworldindata.org/grapher/temperature-anomaly?tab=chart",
        "https://ourworldindata.org/grapher/ghg-emissions-by-sector?tab=chart",
        "https://ourworldindata.org/grapher/per-capita-ghg-emissions?tab=map",
        "https://ourworldindata.org/grapher/co2-emissions-aviation?tab=map",
        "https://ourworldindata.org/grapher/co2-per-capita-vs-renewable-electricity?tab=chart",
        "https://ourworldindata.org/grapher/co2-emissions-and-gdp?tab=chart",
        "https://ourworldindata.org/grapher/kaya-identity-co2?tab=chart",
        "https://ourworldindata.org/grapher/global-change-over-the-last-50-years?tab=chart",
        "https://ourworldindata.org/grapher/production-vs-consumption-co2-emissions?tab=chart",
        "https://ourworldindata.org/grapher/child-mortality?time=earliest..latest&tab=chart",
        "https://ourworldindata.org/grapher/air-pollution-london-vs-delhi?tab=chart",
        "https://ourworldindata.org/grapher/air-pollution-vs-gdp-per-capita?tab=chart",
        "https://ourworldindata.org/grapher/pollution-deaths-from-fossil-fuels?tab=map",
        "https://ourworldindata.org/grapher/death-rate-from-pm25-vs-pm25-concentration?tab=chart",
        "https://ourworldindata.org/grapher/ozone-o3-concentration-in-ppb?tab=map"
    ];
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            {iframeLinks.slice(0, carbonelements).map((link, index) => (
                <iframe
                    key={index}
                    src={link}
                    loading="lazy"
                    style={{ width: "100%", height: "600px", border: "none", borderRadius: "10px", 
                    boxShadow: "0 0 10px rgba(0,0,0,0.1)", overflow: "hidden",
                    animationDuration: '3s'
                }} className="animate-fade-in p-2 overflow-hidden"
                ></iframe>
            ))}
        </div>
    );
}
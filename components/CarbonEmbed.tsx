"use client"
import React from "react";

    export default function CarbonEmbed() {
        const linkCounter = 1;
        const skipIndexes = [2,1,3,6,9, 5, 8];
        const [carbonelements, setCarbonelements] = React.useState(27);
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
      setCarbonelements(carbonelements + 8);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);



    
        return (
            <>
            <div className="my-3 mx-auto md:px-2 p-8 rounded-lg animate-fade-in" style={{ animationDuration: '2s' }}>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
                    Empowering change,<br></br>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
                        Track world data! Infinite scrolling
                    </span>
                </h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl ">
                    The Earth, our shared home, faces a pressing challenge: climate change. It&apos;s a daunting issue, but here&apos;s the good news: we all have the power to make a difference. Every action, big or small, contributes to the collective impact on our environment.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
            {[...Array(carbonelements)].map((_, index) => {
                if (skipIndexes.includes(index)) {
                return null; // Skip this index
                }
                return (
                    <>
                    <iframe
                        key={linkCounter + index}
                        title='Tons of CO2 emitted into the atmosphere'
                        src={`https://www.theworldcounts.com/embeds/counters/${linkCounter + index}?&color=black&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=18`}
                        className="w-full animate-fade-in p-2 overflow-hidden"
                        style={{boxShadow: "0 0 10px rgba(0,0,0,0.1)", borderRadius: "2px",  animationDuration: '10s' }}
                    ></iframe>
                    </>
                );
            })}
            </div>
            </>
        );
    }


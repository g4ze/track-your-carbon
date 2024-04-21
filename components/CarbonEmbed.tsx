import React from "react";

    export default function CarbonEmbed() {
        const linkCounter = 1;

        const skipIndexes = [2,1,3,6,9, 5, 8];
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
            {[...Array(23)].map((_, index) => {
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
        );
    }


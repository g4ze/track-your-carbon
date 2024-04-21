export default function Page() {
    const iframeLinks = [
        "https://ourworldindata.org/grapher/annual-co-emissions-by-region?tab=chart",
        "https://ourworldindata.org/grapher/annual-co2-including-land-use?tab=map",
        "https://ourworldindata.org/grapher/ghg-emissions-by-world-region?tab=chart",
        "https://ourworldindata.org/grapher/temperature-anomaly?tab=chart",
        "https://ourworldindata.org/grapher/ghg-emissions-by-sector?tab=chart",
        "https://ourworldindata.org/grapher/per-capita-ghg-emissions?tab=map",
        "https://ourworldindata.org/grapher/co2-emissions-aviation?tab=map",
        "https://ourworldindata.org/grapher/co2-per-capita-vs-renewable-electricity?tab=chart"
    ];
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            {iframeLinks.map((link, index) => (
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
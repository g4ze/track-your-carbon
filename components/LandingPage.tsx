import BottomBanner from "./BottomBanner";

export default function LandingPage() {
    return (<>
        <div className="flex justify-center items-center ">
            <div className="p-8 rounded-lg">
                
                <div className="text-left">
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
                       
                        Safer Earth,<br></br>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
                        Lesser Emmissions.
                        </span> 
                    </h1>
                    
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                        Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
            </div>
            
        </div>
        <BottomBanner />
        </>
    );
}
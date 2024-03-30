import BottomBanner from "./BottomBanner";
import Features from "./Features";

export default function LandingPage() {
    return (
        <>
            <div className="container my-3 mx-auto md:px-2">
                <div className="p-8 rounded-lg">
                    <div className="text-left">
                        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">
                            Safer Earth,<br></br>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ">
                                Lesser Emissions.
                            </span> 
                        </h1>
                        <p className="text-lg font-normal text-gray-500 lg:text-xl ">
                            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                            ;kjn; poij pk po pok lk jl lk,m ,m,m,m
                        </p>
                    </div>
                </div>
            </div>
            <div className="hidden md:block"><Features /></div>
            <BottomBanner />
        </>
    );
}
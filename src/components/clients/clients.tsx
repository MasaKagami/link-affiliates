import { merriweather } from "@/styles/fonts"; // Import Merriweather from layout.tsx

const Clients = () => {
    return(
        <div id="clients" className="relative w-full h-full border-t border-b">

            <div className="sm:absolute w-1/2 inset-0 bg-white"></div>
            <div className="sm:absolute w-1/2 inset-0 left-1/2 "></div>

            <div className="relative w-full h-full flex flex-col sm:flex-row justify-between items-center max-w-[90%] sm:max-w-[75%] gap-10 sm:gap-0 m-auto">
                {/* title */}
                <div className="sm:w-1/2 w-full bg-gray-20 px-4 sm:px-4 lg:px-10 xl:px-16">
                    <h1 className={`mt-10 sm:mt-0 text-center sm:text-start text-5xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${merriweather.className} `}>Current Client Videos</h1>
                </div>
                
                {/* video */}
                <div className="sm:w-1/2 w-full text-start">
                    <video
                        className="w-full h-auto"
                        controls
                    >
                        <source src="/video/clientVideo.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>                  
            </div>
        </div>
    )
};

export default Clients;
import { merriweather } from "@/styles/fonts"; // Import Merriweather from layout.tsx

const Clients = () => {
    return(
        <div className="relative w-full h-full py-32 ">

            <div className="absolute w-1/2 inset-0 bg-white"></div>
            <div className="absolute w-1/2 inset-0 left-1/2 bg-gray-300"></div>

            <div className="relative w-full h-full flex justify-between items-center max-w-[75%] m-auto">
                <div className="w-1/2 bg-gray-20 px-16">
                    <h1 className={`text-start text-5xl font-bold ${merriweather.className} `}>Current Client Advertisements</h1>
                </div>
                <div className="w-1/2 text-start px-16">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                    
                </div>                  
            </div>
        </div>
    )
};

export default Clients;
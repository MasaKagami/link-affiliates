import { merriweather } from "@/styles/fonts"; // Import Merriweather from layout.tsx

const Services = () => {
    return(
        <div id="services" className="w-full h-full py-32 ">
            <div className="w-full h-full flex flex-col gap-10 justify-between items-center max-w-[90%] sm:max-w-[75%] m-auto">
                <h1 className={`text-center text-5xl font-bold ${merriweather.className} `}>Our Services</h1>
                <div className="flex lg:flex-row flex-col gap-4 justify-between w-full">
                {/* <div className="grid lg:grid-cols-3 grid-rows-3 lg:space-x-4 space-y-4 w-full"> */}


                    <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
                        <h2 className={`text-2xl font-semibold ${merriweather.className} `}>Social Media Advertising</h2>
                        <ul className="list-disc mt-4 text-gray-700 pl-3 space-y-2">
                            <li>Primary focus on Facebook and Instagram Advertisements</li>
                            <li>Attracting the highest quality leads using our 3-step qualification process</li>
                            <li>We partner with one business per state/province and DO NOT share leads</li>
                            <li><span className="font-bold">EXCLUSIVELY</span> for Renovation and Remodeling in North America</li>
                        </ul>

                    </div>
                    <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
                        <h2 className={`text-2xl font-semibold ${merriweather.className} `}>Appointment Setting</h2>
                        <ul className="list-disc mt-4 text-gray-700 pl-3 space-y-2">
                            <li>Our internal sales team, or your team, will contact these leads within 15 minutes of interacting with the advertisements</li>
                            <li>We directly book clients into your calendar</li>
                            <li>We contact clients post-service, producing both short and long-term clients</li>
                        </ul>

                    </div>
                    <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
                        <h2 className={`text-2xl font-semibold ${merriweather.className} `}>Additional Services</h2>
                        <ul className="list-disc mt-4 text-gray-700 pl-3 space-y-2">
                            <li>Social Media Management</li>
                            <li>Frontend and backend website development / maintenance</li>
                            <li>Unique Google Review Campaigns</li>
                            <li>Past-Client Reactivation / email marketing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;
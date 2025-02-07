import { merriweather } from "@/styles/fonts";

const Advantage = () => {
    return(
        <div className="relative w-full h-full py-14 bg-white">

            <div className="absolute w-1/2 inset-0 bg-[url('/solar.webp')] bg-cover bg-center"></div>
            <div className="absolute w-1/2 inset-0 left-1/2 "></div>


            <div className="relative w-full h-full flex justify-between items-center max-w-[75%] m-auto">
                <div className="w-1/2"></div>
                <div className="w-1/2 flex flex-col gap-8 px-16">
                    <h1 className={`text-start text-5xl font-bold ${merriweather.className}`}>
                        Our Competitive Advantage
                    </h1>
                    <ul className="pl-4 list-disc space-y-2">
                        <li>Acquire the most <b>QUALIFIED</b> and <b>EXCLUSIVE</b> leads</li>
                        <li>Custom-built software tailored to your needs, creating a fully-automated, effortless process</li>
                        <li>Consistently gain new clients and close more deals with proven social media marketing strategies</li>
                        <li>Spend more time on yourself, offload the hard work</li>
                        <li>We offer additional services apart from advertising to help with your online presence and other needs</li>
                    </ul>
                </div>

            </div>
        </div>
    )
};

export default Advantage;
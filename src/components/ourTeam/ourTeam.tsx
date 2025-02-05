import { merriweather } from "@/styles/fonts";
import Image from "next/image";

const OurTeam = () => {
    return(
        <div className="w-full h-full py-32 ">

            <div className="relative w-full h-full flex flex-col justify-between items-center max-w-[75%] m-auto">
                <div className="flex flex-col gap-10 items-center w-full">
                    <h1 className={`text-5xl font-bold ${merriweather.className} `}>Our Team</h1>
                    <div className="w-full flex justify-between gap-10">
                        <div className="flex-1 space-y-5">
                            <Image src="/karen.png" alt="photo of karen" height={200} width={200} className="w-full rounded-full">
                            </Image>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h1 className={`text-2xl font-bold ${merriweather.className} `}>Karen Leung</h1>
                                    <p className="text-sm font-medium">Co-Founder</p>
                                </div>
                        
                                <p className="text-sm">With an MBA in marketing & strategic planning and over 25 years of sales and marketing experience, Karen has helped her clients increase their market share and revenues. She has developed and managed successful B2B and B2C campaigns that drive results.</p>
                            </div>
                        </div>
                        <div className="flex-1 space-y-5">
                            <Image src="/jack.png" alt="photo of jack" height={200} width={200} className="w-full rounded-full">
                            </Image>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h1 className={`text-2xl font-bold ${merriweather.className} `}>Jack Sellers</h1>
                                    <p className="text-sm font-medium">Co-Founder & CEO</p>
                                </div>
                                <div className="flex flex-col gap-2 text-sm">
                                    <p>With a business degree from McGill University in Montreal, Canada, Jack has gone on to establish two social media marketing agencies where he has helped local businesses throughout North America grow and thrive.</p>
                                    <p>With experience in Finance, Wealth Management, and Client Management, Jack has a diverse background with different industries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-5">
                            <Image src="/santi.png" alt="photo of santi" height={200} width={200} className="w-full rounded-full">
                            </Image>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h1 className={`text-2xl font-bold ${merriweather.className} `}>Santi Vargas</h1>
                                    <p className="text-sm font-medium">Account Manager</p>
                                </div>
                                <div className="flex flex-col gap-2 text-sm">
                                    <p>With a business degree from Western University, Santiago has built a software company, leading client acquisition and marketing.</p>
                                    <p>Drawing from hands-on experience running campaigns for his own business, he applies proven strategies to optimize ads and funnels, helping his clients reach their sales goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-5">
                            <Image src="/masa.png" alt="photo of masa" height={200} width={200} className="w-full rounded-full">
                            </Image>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h1 className={`text-2xl font-bold ${merriweather.className} `}>Nagamasa Kagami</h1>
                                    <p className="text-sm font-medium">CTO</p>
                                </div>
                                <div className="flex flex-col gap-2 text-sm">
                                    <p>Currently completing his Electrical Engineering degree with a Software Engineering minor at McGill University, Nagamasa has worked on various software projects, specializing in frontend development. Most recently working as a lead frontend engineer at a startup.</p>
                                    <p>Combining technical expertise with a creative approach, Nagamasa has built intuitive web applications that enhance user experience and streamline complex workflows.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default OurTeam;
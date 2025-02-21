import { merriweather } from "@/styles/fonts";
import Image from "next/image";

const OurTeam = () => {
    return(
        <div id="teams" className="w-full h-full py-20 ">

            <div className="relative w-full h-full flex flex-col justify-between items-center max-w-[90%] sm:max-w-[75%] m-auto">
                <div className="flex flex-col gap-10 items-center w-full">
                    <h1 className={`text-5xl font-bold ${merriweather.className} `}>Our Team</h1>
                    {/* <div className="w-full flex justify-between gap-8"> */}
                    <div className="w-full grid xl:grid-cols-5 grid-cols-2 space-x-4 xl:space-x-4">

                        <div className="flex-1 space-y-5 my-4">
                            <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full overflow-hidden">
                                <Image src="/karen.webp" alt="photo of karen" height={200} width={200} className="w-full h-full object-cover">
                                </Image>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h1 className={`text-xl sm:text-2xl font-bold ${merriweather.className} `}>Karen Leung</h1>
                                    <p className="text-sm font-medium">Co-Founder</p>
                                </div>
                        
                                <p className="flex text-xs">With an MBA in marketing and 25+ years of experience, Karen has led successful B2B and B2C campaigns, helping clients grow market share and revenue.</p>
                            </div>
                        </div>
                        <div className="flex-1 space-y-5 my-4">
                            <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full overflow-hidden border">
                                <Image src="/jack.webp" alt="photo of jack" height={200} width={200} className="w-full h-full object-cover object-[50%_-70%]">
                                </Image>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h1 className={`text-xl sm:text-2xl font-bold ${merriweather.className} `}>Jack Sellers</h1>
                                    <p className="text-sm font-medium">Co-Founder & CEO</p>
                                </div>
                                {/* <div className="flex flex-col gap-2  text-xs">
                                    <p>With a business degree from McGill University in Montreal, Canada, Jack has gone on to establish two social media marketing agencies where he has helped local businesses throughout North America grow and thrive.</p>
                                    <p>With experience in Finance, Wealth Management, and Client Management, Jack has a diverse background with different industries.</p>
                                </div> */}
                                <p className="flex text-xs">With a business degree from McGill University, Jack has founded two social media marketing agencies, helping businesses across North America grow. His experience spans finance, wealth management, and client management.</p>

                            </div>
                        </div>
                        <div className="flex-1 space-y-5 my-4">
                            <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full overflow-hidden">
                                <Image src="/santi.webp" alt="photo of santi" height={200} width={200} className="w-full h-full object-cover">
                                </Image>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h1 className={`text-xl sm:text-2xl font-bold ${merriweather.className} `}>Santi Vargas</h1>
                                    <p className="text-sm font-medium">Account Manager</p>
                                </div>
                                {/* <div className="flex flex-col gap-2  text-xs">
                                    <p>With a business degree from Western University, Santiago has built a software company, leading client acquisition and marketing.</p>
                                    <p>Drawing from hands-on experience running campaigns for his own business, he applies proven strategies to optimize ads and funnels, helping his clients reach their sales goals.</p>
                                </div> */}
                                <p className="flex text-xs">With a business degree from Western University, Santi founded a software company, leading client acquisition and marketing. He leverages his experience running campaigns to optimize ads and funnels, driving client sales.</p>

                            </div>
                        </div>
                        <div className="flex-1 space-y-5 my-4">
                            <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full overflow-hidden">
                                <Image src="/masa.webp" alt="photo of masa" height={200} width={200} className="w-full h-full object-cover">
                                </Image>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h1 className={`text-xl sm:text-2xl font-bold ${merriweather.className} `}>Nagamasa Kagami</h1>
                                    <p className="text-sm font-medium">Lead Software Developer</p>
                                </div>
                                {/* <div className="flex flex-col gap-2  text-xs">
                                    <p>Currently completing his Electrical Engineering degree with a Software Engineering minor at McGill University, Nagamasa has worked on various software projects, specializing in frontend development. Most recently working as a lead frontend engineer at a startup.</p>
                                    <p>Combining technical expertise with a creative approach, Nagamasa has built intuitive web applications that enhance user experience and streamline complex workflows.</p>
                                </div> */}
                                <p className="flex text-xs">An Electrical Engineering student with a Software Engineering minor at McGill, Masa specializes in frontend development. As a lead frontend engineer at a startup, he builds intuitive web applications that enhance user experience and streamline workflows.</p>

                            </div>
                        </div>
                        <div className="flex-1 space-y-5 my-4">
                            <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full overflow-hidden">
                                <Image src="/tim.webp" alt="photo of masa" height={200} width={200} className="w-full h-full object-cover object-[0_25%]">
                                </Image>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <h1 className={`text-xl sm:text-2xl font-bold ${merriweather.className} `}>Tim Choi</h1>
                                    <p className="text-sm font-medium">Director of Finance</p>
                                </div>
                                {/* <div className="flex flex-col gap-2  text-xs">
                                    <p>Tim is a finance professional with experience in deal advisory, audit, and business development. He holds a Bachelor of Commerce from Queen’s University’s Smith School of Business.</p>
                                    <p>With his experience, Tim has helped facilitate mid-market M&A deals, along with providing lending to SMEs.</p>
                                </div> */}
                                <p className="flex text-xs">A finance professional with experience in deal advisory, audit, and business development, Tim holds a Bachelor of Commerce from Queen’s University. He has facilitated mid-market M&A deals and provided lending to SMEs.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default OurTeam;
import { merriweather } from "@/styles/fonts"; // Import Merriweather from layout.tsx
import Image from "next/image";

const Testimonials = () => {
    return(
        <div className="w-full h-full py-32 ">

            <div className="relative w-full h-full flex flex-col gap-10 justify-between items-center max-w-[75%] m-auto">
                <div className="flex flex-col gap-4 items-center">
                    <h1 className={`text-5xl font-bold ${merriweather.className} `}>Testimonials</h1>
                    <p>See how our services made a real impact—straight from a business we&apos;ve helped grow.</p>
                </div>
                <div className="flex">
                    <div className="w-1/2 px-16">
                         <h1 className="bg-gray-800 text-white w-[500px] h-[300px] text-center">VIDEO</h1>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-start gap-4">
                        <p className="font-semibold italic">&quot;Jack Sellers and Link Affiliates created and managed advertising campaigns for me that produced an incredible conversion rate. The leads that were provided were top notch and we produced a fantastic ROI (32x) on the money we invested. Jack is also very communicative and professional to work with. Would 100% recommend the service, worth every penny.&quot;</p>
                        <p>- Justin Adams, Owner of Dynamic Design & Remodeling</p>
                        <Image src='/testimonial.png' alt="testimonial company" width={200} height={200} className="w-auto h-[40px]"></Image>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Testimonials;
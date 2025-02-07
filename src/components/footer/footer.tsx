// import Image from "next/image";
import { merriweather } from "@/styles/fonts";
import Link from "next/link";
// import { merriweather } from "@/styles/fonts"; // Import Merriweather from layout.tsx

const Footer = () => {
    return(
        <footer className="w-full h-[220px] border-t border-black ">
            <div className="w-full h-full max-w-[75%] gap-10 flex justify-between items-center m-auto my-auto ">
                {/* <h1 className={`${merriweather.className} font-bold text-2xl`}>LINK AFFILIATES</h1> */}
                <div className="flex flex-col justify-end h-full  max-h-[50%] w-full">
                    <h1 className={`text-6xl font-bold ${merriweather.className}`}>Let&apos;s Talk</h1>
                </div>
                
                
                <div className="flex flex-col h-full justify-end gap-4 items-end max-h-[50%] w-full">
                    <div className="flex w-full items-center justify-end gap-16">
                        <h1 className="font-medium text-sm">CONTACT</h1>
                        <div className="flex flex-col text-xs">
                            <p>Email: Jack@LinkAffiliates.ca</p>
                            <p>Phone : +1 (604)-710-8652</p>
                        </div>
                    </div>
                    <div className="grid-cols-2 space-x-7 text-xs">
                        <Link href="/terms-of-conditions" className="font-medium underline">Terms & Conditions</Link>
                        <Link href="/privacy-policy" className="font-medium underline">Privacy Policy</Link>
                    </div>

                </div>
            </div>
        </footer>

    )
};

export default Footer
import Image from "next/image";
import Link from "next/link";
// import { merriweather } from "@/styles/fonts"; // Import Merriweather from layout.tsx

const Footer = () => {
    return(
        <footer className="w-full h-[300px] border-t border-black">
            <div className="w-full h-full max-w-[75%] flex justify-between items-center m-auto">
                {/* <h1 className={`${merriweather.className} font-bold text-2xl`}>LINK AFFILIATES</h1> */}
                <Image alt="logo" src="/logo.png" width={200} height={200} className=""/>
                <div className="flex flex-col">
                    <h1>CONTACT US</h1>
                    <p>Email: Jack@LinkAffiliates.ca</p>
                    <p>Phone : +1 (604)-710-8652</p>
                    <Link href="/terms-of-conditions">Terms & Conditions</Link>
                </div>
            </div>
        </footer>

    )
};

export default Footer
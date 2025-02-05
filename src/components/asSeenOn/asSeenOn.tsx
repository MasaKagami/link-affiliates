import { merriweather } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";

const AsSeenOn = () => {
    return(
        <div className="w-full h-full py-32 bg-white">
            <div className="w-full flex justify-center items-center flex-col gap-8 px-16">
                <h1 className={`text-2xl font-bold ${merriweather.className}`}>
                    As Seen On
                </h1>
                <div className="flex gap-24 items-center">
                    <div className="flex-1">
                        <Link href="https://www.theglobeandmail.com/investing/markets/markets-news/GetNews/26671423/link-affiliates-generate-highintent-highquality-leads-for-home-improvement-businesses-throughout-north-america/"><Image src="/globe-and-mail.png" alt="globe and mail logo" width={200} height={200} className="h-32 w-auto"></Image></Link>
                    </div>
                    <div className="flex-1">
                        <Link href="https://www.barchart.com/story/news/26671391/link-affiliates-generate-highintent-highquality-leads-for-home-improvement-businesses-throughout-north-america"><Image src="/barchart.png" alt="barchart logo" width={200} height={200} className="h-14 w-auto"></Image></Link>
                    </div>
                    <div className="flex-1">
                        <Image src="/fox-40.png" alt="fox 40 logo" width={200} height={200} className="h-24 w-auto"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AsSeenOn;
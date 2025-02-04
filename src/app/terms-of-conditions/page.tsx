import Link from "next/link";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { merriweather } from "@/app/layout"; // Import Merriweather from layout.tsx

const TermsOfService = () => {
    return(
        <>
            <Navbar/>
            <div className="w-full min-h-[calc(100vh-70px)] my-20 bg-white">
                <div className="w-full h-full flex-col justify-between items-center max-w-[75%] m-auto">
                    <h1 className={`text-5xl font-bold my-10 ${merriweather.className}`}>Terms and Conditions</h1>
                    <p className={`text-3xl font-bold mt-10 mb-3 ${merriweather.className} `}>1. SMS</p>
                    <div className="space-y-4 text-lg text-gray-700">
                        <p>Link Affiliates offers appointment reminder and confirmation texts for all your home improvement company&apos;s needs. Receive important notifications about upcoming appointments and confirmations for property showings.</p>
                        <p>You can cancel the SMS service at any time. Simply text &quot;STOP&quot; to the short code. Upon sending &quot;STOP,&quot; we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us.</p>
                        <p>To rejoin, sign up as you did initially, and we will resume sending SMS messages to you. If you experience issues with the messaging program, reply with the keyword HELP for more assistance, or reach out directly to jack@linkaffiliates.ca</p>
                        <p>Carriers are not liable for delayed or undelivered messages. As always, message and data rates may apply for messages sent to you from us and to us from you. You will receive appointment reminder and confirmation texts as needed. For questions about your text plan or data plan, contact your wireless provider. For privacy-related inquiries, please refer to our privacy policy:&nbsp;
                            <Link href="/privacy-policy" className="underline text-blue-500">
                                Privacy Policy
                            </Link>.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default TermsOfService;
import Link from "next/link";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { merriweather } from "@/styles/fonts"; // Import Merriweather from layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - Link Affiliates",
    description: "Read our privacy policy to understand how we handle your data.",
  };
  
const PrivacyPolicy = () => {
    return(
        <>
            <Navbar/>
            <div className="w-full min-h-[calc(100vh-90px)] py-20 bg-white">
                <div className="w-full h-full flex-col justify-between items-center max-w-[75%] m-auto">
                    <h1 className={`text-5xl font-bold my-10 ${merriweather.className}`}>Privacy Policy</h1>
                    <p>This privacy policy explains how we collect, use, and protect your personal information when you use our SMS appointment reminder and confirmation service. By using our SMS service, you consent to the practices described in this policy.</p>

                    {/* 1. */}
                    <p className={`text-3xl font-bold mt-10 mb-3 ${merriweather.className} `}>1. Information We Collect</p>
                    <div className="text-base text-gray-700">
                        <p>When you sign up for our SMS service, we collect the following types of information:</p>
                        <p><b>Phone Number:</b> The phone number you provide to receive appointment reminders and confirmations.</p>
                        <p><b>Message Interaction Data:</b> Information about your interactions with our messages, such as responses to &quot;STOP&quot; or &quot;HELP.&quot;</p>
                    </div>

                    {/* 2. */}
                    <p className={`text-3xl font-bold mt-10 mb-3 ${merriweather.className} `}>2. How We Use Your Information</p>
                    <div className="text-base text-gray-700">
                        <p>We use your information to:</p>
                        <p><b>Send SMS Notifications:</b> To deliver appointment reminders and confirmations to your phone number.</p>
                        <p><b>Manage Your Subscription:</b> To process requests to unsubscribe or resubscribe from our SMS service.</p>
                        <p><b>Provide Support:</b> To assist you with any issues related to our SMS service if you contact us.</p>
                    </div>

                    {/* 3. */}
                    <p className={`text-3xl font-bold mt-10 mb-3 ${merriweather.className} `}>3. Data Security</p>
                    <div className="text-base space-y-2 text-gray-700">
                        <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or misuse.</p>
                        <p>However, no data transmission over the internet or electronic storage is completely secure. We strive to use commercially acceptable means to protect your information but cannot guarantee absolute security.</p>
                    </div>                    

                    {/* 4. */}
                    <p className={`text-3xl font-bold mt-10 mb-3 ${merriweather.className} `}>4. Data Sharing</p>
                    <div className="text-base text-gray-700">
                        <p>We do not share your personal information with third parties, except:</p>
                        <p><b>Service Providers:</b> We may use third-party service providers to facilitate the SMS service, such as for message delivery. These providers are obligated to protect your information and use it only for the purpose of providing the service.</p>
                        <p><b>Legal Requirements:</b> We may disclose your information if required by law or to protect our rights or the rights of others.</p>
                    </div>

                    {/* 5. */}
                    <p className={`text-3xl font-bold mt-10 mb-3 ${merriweather.className} `}>5. Your Choices</p>
                    <div className="text-base text-gray-700">
                        <p><b>Opt-Out</b> You can cancel the SMS service at any time by texting &quot;STOP&quot; to the short code provided. Upon receiving your &quot;STOP&quot; message, we will confirm your unsubscribe status via SMS.</p>
                        <p><b>Re-Join:</b> To resume receiving SMS messages, sign up again through the initial process.</p>
                        <p><b>Help:</b> For assistance with the messaging program, reply with &quot;HELP&quot; or contact us directly at <span className="text-blue-500">jack@linkaffiliates.ca</span></p>
                    </div>

                    {/* 6. */}
                    <p className={`text-3xl font-bold mt-10 mb-3 ${merriweather.className} `}>6. Message and Data Rates</p>
                    <div className="text-base text-gray-700">
                        <p>Please be aware that standard message and data rates may apply for messages sent to and received from us. Contact your wireless provider for details about your text and data plan.</p>
                    </div>

                    {/* 7. */}
                    <p className={`text-3xl font-bold mt-10 mb-3 ${merriweather.className} `}>7. Changes to This Privacy Policy</p>
                    <div className="text-base text-gray-700">
                        <p>We may update this privacy policy from time to time. Any changes will be posted on our website, and the revised policy will become effective upon posting. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>
                    </div>

                    {/* 8. */}
                    <p className={`text-3xl font-bold mt-10 mb-3 ${merriweather.className} `}>8. Contact Us</p>
                    <div className="text-base text-gray-700">
                        <p>If you have any questions or concerns about this privacy policy or our SMS service, please contact us at <span className="text-blue-500">jack@linkaffiliates.ca</span></p>
                    </div>

                    {/* 9. */}
                    <p className={`text-3xl font-bold mt-10 mb-3 ${merriweather.className} `}>9. Additional Information</p>
                    <div className="text-base text-gray-700">
                        <p>For more information about our terms of service, please refer to our <Link href="/terms-of-conditions" className="text-blue-500 underline">Terms and Conditions</Link></p>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
};

export default PrivacyPolicy;
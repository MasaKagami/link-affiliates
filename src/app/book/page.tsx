import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Meeting - Link Affiliates",
  description: "Schedule a meeting with Link Affiliates to discuss your marketing needs.",
};

const Book = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="flex flex-col min-h-screen w-screen justify-center">
                <iframe
                    src="https://calendly.com/jack-linkaffiliates/30min"
                    className="flex-grow border-none w-full h-full"
                ></iframe>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Book;
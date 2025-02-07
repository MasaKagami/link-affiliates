import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const Book = () => {
    return(
        <>
            <Navbar/>
            <div className="flex flex-col h-[calc(100vh-90px)] w-screen overflow-hidden justify-center">
                <iframe
                    src="https://calendly.com/jack-linkaffiliates/30min"
                    width="100%"
                    height="100%"
                    className="border-none w-full"
                    style={{ minHeight: "100vh", overflow: "hidden" }}
                ></iframe>
            </div>
            <Footer/>
        </>
    )
}

export default Book;
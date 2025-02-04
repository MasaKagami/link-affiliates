import Link from "next/link";

const Footer = () => {
    return(
        <footer className="w-full h-[150px] bg-blue-500">
            <div className="w-full h-full max-w-[70%] flex justify-between items-center m-auto">
                <h1>LOGO</h1>
                <div className="flex flex-col">
                    <h1>CONTACT US</h1>
                    <p>Email: Jack@LinkAffiliates.ca</p>
                    <p>Phone : +1 (604)-710-8652</p>
                    <Link href="/terms">Terms & Conditions</Link>
                </div>
            </div>
        </footer>

    )
};

export default Footer
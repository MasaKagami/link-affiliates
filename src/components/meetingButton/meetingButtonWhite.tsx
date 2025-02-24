import Link from "next/link";

const MeetingButtonWhite = () => {
    return(
        <Link href="/book">
            <button className="cta-white flex items-center">
                <span className="">Book a Meeting</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
        </Link>
    )
};

export default MeetingButtonWhite;
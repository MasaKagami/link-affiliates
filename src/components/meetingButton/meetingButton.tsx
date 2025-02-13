import Link from "next/link";

const MeetingButton = () => {
    return(
        <Link href="/book">
            <button className="cta flex items-center">
                <span className="text-black">Book a meeting</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>

        </Link>
    )
};

export default MeetingButton;
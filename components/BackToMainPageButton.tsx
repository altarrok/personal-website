import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";

export const BackToMainPageButton: React.FC<{ dark?: boolean }> = ({ dark }) => {
    return (
        <Link 
        className={`text-white font-semibold italic text-lg flex gap-1 items-center transition-colors hover:text-pink-500 ${dark ? 'text-black' : 'text-white'}`} 
        href="/"
        >
            <HiArrowSmLeft /> Main Page
        </Link>
    );
}
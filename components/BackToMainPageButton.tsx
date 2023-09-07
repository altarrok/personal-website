import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";

export const BackToMainPageButton: React.FC = () => {
    return (
        <Link 
        className="drop-shadow-md text-white font-semibold italic text-lg flex gap-1 items-center transition-all hover:text-yellow-200 px-4 py-2 bg-fuchsia-400 rounded-full" 
        href="/"
        >
            <HiArrowSmLeft /> Main Page
        </Link>
    );
}
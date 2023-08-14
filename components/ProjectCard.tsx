import { motion } from "framer-motion";
import Link from "next/link";
import { HiCursorClick } from "react-icons/hi";

export const ProjectCard: React.FC<{
    bgImageUrl: string,
    projectTitle: string,
    projectSlug: string,
}> = ({ bgImageUrl, projectTitle, projectSlug }) => {
    return (
        <Link
            className="block w-full h-full rounded-3xl cursor-pointer relative overflow-hidden"
            href={`/project/${projectSlug}`}
        >
            <div className="absolute z-10 w-full h-full bg-black opacity-0 hover:opacity-75 transition-opacity flex items-center justify-center">
                <h2 className="text-white font-bold text-3xl">{projectTitle}</h2>
                <span className="absolute z-10 top-4 left-4 text-white text-xs flex gap-1 items-center italic"><HiCursorClick /> Click to Learn More</span>
            </div>
            <div
                className="w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage: `url(${bgImageUrl})`,
                }}
            />
        </Link>
    );
}
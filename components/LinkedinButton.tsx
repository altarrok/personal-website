import { FaLinkedinIn } from "react-icons/fa";
import { SocialButton } from "./SocialButton"

export const LinkedinButton: React.FC = () => {
    return (
        <SocialButton href={"https://www.linkedin.com/in/altay-batuhan/"}>
            <FaLinkedinIn className="w-full h-full fill-white" />
        </SocialButton>
    );
}
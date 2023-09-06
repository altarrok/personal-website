import { SocialButton } from "./SocialButton"
import { FaGithub } from "react-icons/fa";

export const GithubButton: React.FC = () => {
    return (
        <SocialButton href={"https://github.com/altarrok"}>
            <FaGithub className="w-full h-full fill-gray-50" />
        </SocialButton>
    );
}
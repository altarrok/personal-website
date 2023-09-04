import { HiOutlineMail } from "react-icons/hi";
import { SocialButton } from "./SocialButton";

export const EmailButton: React.FC = () => {
    return (
        <SocialButton href={"mailto:altaybatuhanmail@gmail.com"}>
            <HiOutlineMail className="w-full h-full stroke-white" />
        </SocialButton>
    );
}
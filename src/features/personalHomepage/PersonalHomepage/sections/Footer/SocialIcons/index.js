import { IconFB, IconGH, IconInsta, IconLI } from "../../../icons";
import { IconsWrapper, SocialLink } from "./styled";


const SocialIcons = () => {
    return (
        <IconsWrapper>
            <SocialLink href="https://github.com/TheRitual"> <IconGH /> </SocialLink>
            <SocialLink href="https://github.com/TheRitual"> <IconFB /> </SocialLink>
            <SocialLink href="https://github.com/TheRitual"> <IconLI /> </SocialLink>
            <SocialLink href="https://github.com/TheRitual"> <IconInsta /> </SocialLink>
        </IconsWrapper>
    );
}

export default SocialIcons;
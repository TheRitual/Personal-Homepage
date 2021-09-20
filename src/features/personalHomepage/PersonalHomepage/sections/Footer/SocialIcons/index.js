import { IconFB, IconGH, IconInsta, IconLI } from "../../../gfx";
import { IconsWrapper, SocialLink } from "./styled";


const SocialIcons = () => {
    return (
        <IconsWrapper>
            <SocialLink href="https://github.com/TheRitual" target="_blank"> <IconGH /> </SocialLink>
            <SocialLink href="https://www.facebook.com/ZielonyMowi" target="_blank"> <IconFB /> </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/marcin-kawczy%C5%84ski-122734105/" target="_blank"> <IconLI /> </SocialLink>
            <SocialLink href="https://www.instagram.com/mgik_ritual/" target="_blank"> <IconInsta /> </SocialLink>
        </IconsWrapper>
    );
}

export default SocialIcons;